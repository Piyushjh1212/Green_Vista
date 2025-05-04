import express from "express";
import { handleContactForm } from "../Controllers/ContactControllers.js";

const Contactrouter = express.Router();

// Contact form route
Contactrouter.post("/contact", handleContactForm);

export default Contactrouter;
