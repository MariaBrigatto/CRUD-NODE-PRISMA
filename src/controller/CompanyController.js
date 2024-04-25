import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getCompany = async (req, res) => {
    try {
        const result = await prisma.company.findMany()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({msg: msg.error})
    }
}

export const getCompanybyID = async (req, res) => {
    try {
        const result = await prisma.company.findUnique()
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({msg: msg.error})
    }
}





