import { prisma } from "../utils/prisma.js";

export async function findUserbyEmail(email) {            //cette fonction remplace select * from user where email = 'email'
    return prisma.user.findUnique({                              
        where: { email }       
    });
    return prisma.user.findUnique({                      // On vérifie que l'email est unique dans la base de données
        where: {
            email
        }
    });
}

export async function createUser(userdata) {                           
    return prisma.user.create({data: userdata});            //cette fonction remplace insert into user (name, email) values ('name', 'email')   
}

export async function listUsers() {
    return prisma.user.findMany();                          //cette fonction remplace select * from user
}

export async function getUserById(id) {
    return prisma.user.findUnique({                      //cette fonction remplace select * from user where id = 'id'
        where: { id }
    });
}

export async function deleteUser(id) {
    return prisma.user.delete({                      //cette fonction remplace delete from user where id = 'id'
        where: { id }
    });
}