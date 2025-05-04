import Contact from "../Modles/Contactmodel.js"; // Import your Contact model

// Controller function to handle the contact form submission
export const handleContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body; // Extract data from the request body

    // Middleware for Validation: Ensure all fields are filled
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Middleware: Here you can perform any further checks, like email format validation, etc.

    // Save the contact form to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Respond with a success message
    return res
      .status(201)
      .json({ message: "Message received and saved successfully!" });
  } catch (error) {
    console.error("Error while saving contact form:", error); // Log the error for debugging

    // Respond with an error message if something goes wrong
    return res
      .status(500)
      .json({ error: "Internal server error, please try again." });
  }
};
