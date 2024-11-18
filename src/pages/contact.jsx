import React, { useState } from "react";
import db from "../firebase"; // Make sure this path is correct
import { collection, addDoc } from "firebase/firestore";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false); // Loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        try {
            const usersCollection = collection(db, "usersq");
            await addDoc(usersCollection, {
                name: formData.name,
                email: formData.email,
                message: formData.message
            });
            alert("Thank you for contacting us!");
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
            <h2 className="App-heading">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px"
                        }}
                        
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px"
                        }}
                        
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
                        Message:
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                            height: "100px"
                        }}
                        
                    ></textarea>
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: isLoading ? "not-allowed" : "pointer",
                        opacity: isLoading ? 0.7 : 1
                    }}
                    disabled={isLoading} // Disable button while loading
                >
                    {isLoading ? "Submitting..." : "Submit"} {/* Show loading text */}
                </button>
            </form>
        </div>
    );
}

export default Contact;
