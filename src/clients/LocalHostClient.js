import {create} from "apisauce";

const LocalHostClient = create({
    baseURL:"http://localhost:3000"
});

export {LocalHostClient};
