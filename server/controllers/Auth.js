const mongoose = require("mongoose");
const User = require("../modules/User");

exports.auth = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;

        // Fix the variable name in the if condition
        if (!name || !email || !password) {
            return res.json({
                success: false,
                message: "All Fields Required"
            });
        }

        // Use User.create without "new"
        const user = await User.create({
            name,
            email,
            password
        });

        return res.json({
            success: true,
            message: "User Created Successfully :)"
        });
    } catch (err) {
        // Return an error response
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
