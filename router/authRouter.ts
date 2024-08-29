import express from "express";

export default function loginRouter() {
    const router = express.Router();

    router.get("/login", (req, res) => {
        res.render("login");
    });

    router.post("/login", async(req, res) => {
        res.redirect("/");
    });

    router.get("/logout", (req, res) => {
        res.redirect("/login")
    });

    router.get("/register", (req, res) => {
    });

    router.post("/register", async(req, res) => {

    });

    return router;
}