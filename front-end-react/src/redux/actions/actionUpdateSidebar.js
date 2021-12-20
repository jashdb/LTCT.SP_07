function actionUpdateSidebar(sidebarStatus) {
    const data = {
        sidebarState: sidebarStatus,
    }
    console.log(data);
    return {
        type: "UPDATE_SIDEBAR",
        data: data,
    }
}

export default actionUpdateSidebar;