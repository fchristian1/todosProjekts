import React, { useState } from "react";
import List from "../../components/list";
import Button from "../../components/Button";

function LoginRegisterPage() {
    const [page, setPage] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    return (
        <div className="flex flex-col m-2 h-full text-xl">
            <List cols={2} gap={2}>
                <Button onClick={() => setPage("login")} active={page == "login" ? "true" : "false"}>
                    Login
                </Button>
                <Button onClick={() => setPage("register")} active={page == "register" ? "true" : "false"}>
                    Register
                </Button>
            </List>
            <div className="flex flex-col justify-center items-center gap-2 w-full h-full">
                {page == "login" && (
                    <div className="flex flex-col gap-2 w-full">
                        <div className="mx-2 font-bold">Login</div>
                        <input className="bg-white p-2 border-2 border-black rounded" placeholder="Email" type="text" name="email" id="email" />
                        <input className="bg-white p-2 border-2 border-black rounded" placeholder="Password" type="password" name="password" id="password" />

                        <Button>Login</Button>
                    </div>
                )}
                {page == "register" && (
                    <div className="flex flex-col gap-2 w-full">
                        <div className="mx-2 font-bold">Register</div>
                        <input className="bg-white p-2 border-2 border-black rounded" placeholder="Email" type="text" name="email" id="email" />
                        <input className="bg-white p-2 border-2 border-black rounded" placeholder="Password" type="password" name="password" id="password" />
                        <input
                            className="bg-white p-2 border-2 border-black rounded"
                            placeholder="Repeat Password"
                            type="password"
                            name="password2"
                            id="password2"
                        />
                        <Button>Register</Button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginRegisterPage;
