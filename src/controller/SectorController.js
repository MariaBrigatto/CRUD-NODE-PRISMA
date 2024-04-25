import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient

export const getSector = async (req, res) => {
    try {
        const result = await prisma.sector.findMany()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({msg: msg.error})
    }
}

export const getSectorByID = async (req,res) => {
    try {
        const result = await prisma.sector.findUnique()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({msg: msg.error})
    }
}