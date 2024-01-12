const home = async (req, res) => {
    try {
        res.status(200).send('Welcome to Home page router');
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {
    try {
        res.status(200).send('Welcome to register page router');
    } catch (error) {
        console.log(error);
    }
}

module.exports = { home, register }