import { NextApiRequest, NextApiResponse } from "next";

const datas = [
    {
        "id": 1,
        "name":"Sic Bo",
        "alt": "sic-bo",
        "provider":"Pragmatic"
    },
    {
        "id": 2,
        "name":"Sic Bo",
        "alt": "sic-bo",
        "provider":"Pragmatic"
    }
]

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.json(datas)
}
