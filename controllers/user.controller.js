const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { signupService, gets, findOne, getByDeleteId, remove, update, getById } = require('../services/user.service')

const createUser = async (req, res) => {
    try {
        if (req.headers.role !== 'admin') {
            console.log(req.headers.role);
            return res.status(403).send({ message: 'forbidden access' })
        }
        const user = await signupService(req.body);
        res.status(200).json({
            message: "New User Created Successful",
            user: user
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const query = req.query;
        const users = await gets(query);
        res.status(200).json({
            users
        })
    }
    catch (err) {
        // console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}

const getHeads = async (req, res) => {
    try {
        const query = req.query;
        const users = await gets(query);
        const heads = users.filter(user => user.role === 'head')
        // console.log(head)
        res.status(200).json({
            heads
        })
    }
    catch (err) {
        // console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}

// const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || email === null) {
//             return res.status(400).json({ message: "Email is required" });
//         }

//         if (!password || password === null) {
//             return res.status(400).json({ message: "Password is required" });
//         }

//         // const query = { email: email };

//         const user = await findOne({email: email});

//         if (!user) {
//             return res.status(404).json({ message: "This email is not found!" });
//         }

//         // const isPasswordMatch = await user.matchPassword(password);
//         // if (!isPasswordMatch) {
//         //     return res.status(400).json({ message: "Password is incorrect!" });
//         // }

//         let matchPassword = await bcrypt.compare(password,user.password);
//         if(!matchPassword)return res.status(403).json({
//             status:'fail',
//             msg : 'password not match'
//         });  

//         const token =  jwt.sign({user},process.env.ACCESS_TOKEN,"10d");

//         res.json({
//             message: "User login successful",
//             user: user,
//             token  : token
//         });

//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({
//             message: err.message
//         })
//     }
// }

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || email === null) {
            return res.status(400).json({ message: "Email is required" });
        }

        if (!password || password === null) {
            return res.status(400).json({ message: "Password is required" });
        }

        const user = await findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: "This email is not found!" });
        }

        let matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return res.status(403).json({
                status: 'fail',
                msg: 'Password does not match'
            });
        }
        const token = jwt.sign(
            {id:user._id, role : user.role,email:user.email}, // Payload should be minimal
            process.env.ACCESS_TOKEN, // Secret key
            { expiresIn: "10d" } // Options object
        );

        res.json({
            message: "User login successful",
            user: user,
            token: token
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = loginUser;


const getLoggedUser = async (req, res) => {
    try {
        const user = req.user;

        res.status(200).json({
            user: user
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}



const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password
}

const updateUserById = async (req, res) => {
    try {
        if (req.body.password) {
            req.body.password = await hashPassword(req.body.password)
        }


        const id = req.params.id;

        const exist = await getById(id);
        if (!exist) {
            return res.status(404).json({
                message: "No user found!",
            })
        }

        const options = { new: true };

        const user = await update(id, req.body.password, options);
        res.status(200).json({
            message: "User update successful",
            user: user
        })
        // console.log(user)
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }


}

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;

        const exist = await getByDeleteId(id);
        if (!exist) {
            return res.status(404).json({
                message: "No user found!",
            })
        }

        const lead = await remove(id);
        res.status(200).json({
            message: "User delete successful",
            lead
        })
    }
    catch (err) {
        // console.log(err);
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = { createUser, getUsers, getHeads, loginUser, getLoggedUser, deleteUserById, updateUserById }