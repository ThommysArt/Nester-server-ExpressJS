import { Request, Response } from 'express';
import { PrismaClient, User } from '@prisma/client';
const prisma = new PrismaClient();

const usersController = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await prisma.user.findMany();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getUserById: async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createUser: async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const newUser = await prisma.user.create({
        data: {
          id
        },
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },


  deleteUser: async (req: Request, res: Response) => {
    const userId = parseInt(req.params.id);
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: userId },
      });
      res.json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

export default usersController;
