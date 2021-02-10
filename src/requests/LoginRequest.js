import {AzureClient} from "../clients/AzureClient";

const getLoginToken = (name,password) => {
    return AzureClient
        .post("/api/login",{name:name,password:password});
}

export {getLoginToken}
