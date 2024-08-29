import app from "./app";
import * as jwt from "jsonwebtoken";
app.post("/login", async(req, res) => {
    const user : string = req.body.username;
    const password : string = req.body.password;
    try {
        const token = jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: "7d" });
        res.cookie("jwt", token, { httpOnly: true, sameSite: "lax", secure: true });
    } catch (e : any) {
        res.redirect("/login");
    }
});

app.listen(app.get("port"), async() => {
    console.log("Server started on http://localhost:" + app.get("port"));
});