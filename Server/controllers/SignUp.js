import bcrypt from "bcryptjs";
import Mentor from "../models/mentors.model.js";
import Mentee from "../models/mentees.model.js";
import User from "../models/users.model.js";

const Register = async (req, res) => {

    const {
        description,
        name,
        role,
        skills,
        career_goal,
        interests,
        email,
        password,
    } = req.body;

    if (!email || !role || !name || !password) {
        return res.status(400).json({ message: "Incomplete Information" });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        });
        if (role === "1") {
            await Mentor.create({
                user_id: newUser.user_id, // Use the auto-incremented userId
                description,
                email,
                mentor_name: name,
                role,
                skills,
                career_goal,
                interests,
            });
        }
        else {
            await Mentee.create({
                user_id: newUser.user_id, // Use the auto-incremented userId
                description,
                email,
                mentee_name: name,
                role,
                skills,
                career_goal,
                interests,
            });
        }
        res.status(201).json({
            message: "User registered successfully",
            user: {
                user_id: newUser.user_id,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err });
    }
};

export default Register;