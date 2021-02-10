import {AzureClient} from "../clients/AzureClient";

const Logout = (token) => {
    return AzureClient.post("/api/logout",{},{headers:{'Authorization':"Bearer "+token}})
};

export {Logout};
