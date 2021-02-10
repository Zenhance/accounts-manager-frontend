import {create} from "apisauce";

const AzureClient = create({
    baseURL:"https://accounts-manager.azurewebsites.net"
});

export {AzureClient};
