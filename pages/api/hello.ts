import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '../../api-interfaces/user'

const getUser = (req: NextApiRequest, res: NextApiResponse<User>): void => {
  res.status(200).json({ name: 'John Doe' })
}

export { getUser }
