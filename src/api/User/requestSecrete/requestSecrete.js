/*
import { generateSecret } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutaiton: {
        requestSecret: async (_, args) => {
            const { email } = args;
            const loginSecret = generateSecret();
            console.log(secret);
            try {
                await prisma.updateUser({ data: { loginSecret }, where: { email } });
                return true;

            } catch(error){
                console.log(error)
                return false;

            }
        }
    }
};
*/