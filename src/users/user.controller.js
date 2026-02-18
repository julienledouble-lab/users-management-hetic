// contrôleur pour les utilisateurs → gère les requêtes entrantes et renvoie des réponses au client

import { createUser, findUserbyEmail, listUsers, getUserById, deleteUser } from "./user.service.js";
import { validateUser } from "./users.validation.js";

export async function handleCreateUser(request, response) {
  //cette fonction remplace la route post /users
  try {
    const result = validateUser(request.body);

    if (!result.ok) {
      // Si la validation échoue, on retourne une réponse d'erreur
      return response.status(400).json({
        // avec les détails des erreurs
        message: "Validation failed",
        errors: result.errors,
      });
    }

    // Vérifier que l'utilisateur n'existe pas déjà
    const existingUser = await findUserbyEmail(request.body.email);
    if (existingUser) {
      return response.status(409).json({ message: "User already exists" });
    }

    // Créer l'utilisateur
    const user = await createUser(request.body);
    return response.status(201).json(user);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}

export async function handlelistUsers(request, response) {
    try {
        const users = await listUsers();
        return response.status(200).json(users);
        } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}

export async function handleGetUserById(request, response) {
    try {
        const {id} = request.params;

        if (!id) {
            return response.status(400).json({ message: "Missing user ID" });
        }

        const user = await getUserById(id);
        if (!user) {
            return response.status(404).json({ message: "User not found" });
        }

        return response.status(200).json(user);
            } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}

export async function handleDeleteUser(request, response) {
    try {
        const {id} = request.params;

        if (!id) {
            return response.status(400).json({ error:'ID is required'});
        }

        const user = await getUserById(id);
        if (!user) {
            return response.status(404).json({ error: 'User not found' });
        }

        await deleteUser(id);

        return response.status(200).json({message: 'User deleted successfully'});

        } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}
