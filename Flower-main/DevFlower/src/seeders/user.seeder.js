import {generatePassword} from "@/utils/helpers";
import {User} from "@/app/models";

export default async function userSeeder() {
    let EMAIL = process.env.SUPER_ADMIN_EMAIL;
    let PASSWORD = process.env.SUPER_ADMIN_PASSWORD;
    if (!EMAIL || !PASSWORD) {
        EMAIL = "admin@gmail.com";
        PASSWORD = "admin123456";
        console.warn("---------------------------------------------------------------");
        console.warn('"Super Admin" is not configured. Using the default account:');
        console.warn(`Email: ${EMAIL}`);
        console.warn(`Password: ${PASSWORD}`);
        console.warn("---------------------------------------------------------------");
    }
    const superAdmin = {
        name: "Super Admin",
        email: EMAIL,
        password: generatePassword(PASSWORD),
    };

    await User.findOneAndUpdate(
        {email: superAdmin.email},
        {$set: superAdmin},
        {upsert: true}
    );
}
