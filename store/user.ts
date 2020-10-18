import Datastore from 'nedb';
import path from 'path';

const db = new Datastore({
    filename: path.join(__dirname, '/data/users.db'),
    autoload: true
});

// database struct
interface DBUser {
    username: string
}

class User {
    Username: string;

    constructor (username: string) {
        this.Username = username;
    }

    async save () {
        return new Promise((resolve, reject) => {
            db.update({ username: this.Username }, { username: this.Username }, { upsert: true }, (err, updated, created) => {
                if (err) return reject(err);
                if (created) {
                    console.log(`User (${this.Username}) created`);
                }
                return resolve();
            });
        });
    }

    static async init () {
        // init database (create admin users if it does not exists yet)
        const admin = await User.getByUsername('admin');
        if (admin == null) {
            new User('admin').save();
        }
    }

    static async getByUsername (username: string) {
        return new Promise((resolve, reject) => {
            db.findOne({ username }, (err, doc) => {
                if (err) return reject(err);
                if (doc == null) return resolve(null);
                resolve(new User(doc.username));
            });
        });
    }
}

export = User;
