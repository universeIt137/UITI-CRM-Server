const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

// const verifyAccessToken = async (req, res, next) => {
//     try {
//         // Get the authorization token from headers
//         let token = req.headers["authorization"];

//         // Check if the token exists and starts with 'Bearer'
//         if (token && token.startsWith("Bearer ")) {
//             token = token.split(" ")[1]; // Extract token after 'Bearer '

//             try {
//                 // Verify the token using the secret from environment variables
//                 const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);

//                 // Extract user id and role from the decoded token
//                 const { _id, role } = decoded;
//                 console.log(role);
//                 // Store user data in request headers for later use
//                 req.headers.id = _id;
//                 req.headers.role = role;

//                 // req.user = await User.findById(decoded.id);

//                 // Proceed to the next middleware or route handler
//                 next();
//             } catch (err) {
//                 // Handle invalid or expired token errors
//                 return res.status(401).json({ message: "Unauthorized user" });
//             }
//         } else {
//             // Handle missing or incorrectly formatted token
//             return res.status(400).json({ message: "Invalid request" });
//         }
//     } catch (err) {
//         // Handle unexpected server errors
//         res.status(500).json({ message: err.message });
//     }
// };

const studentAccessToken = async (req,res,next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'You are not authenticated!' });
        }
        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN);

        const user = decodeToken.role;

        req.headers.user = user;

        next();

    } catch (error) {
        return res.status(500).json({
            status : "fail",
            msg : error.toString(),
        })
    }
};

module.exports = studentAccessToken;
