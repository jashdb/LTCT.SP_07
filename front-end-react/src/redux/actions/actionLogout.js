function actionLogout() {
    const userInfo = {
        email: "Undefined",
        profilePic: "",
        role: 0,
    };
    const data = {
        status: "LOGOUT",
        userInfo: userInfo,
    }
    return {
        type: "LOGOUT",
        data: data,
    }
}

export default actionLogout;