import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { RedwoodError, validateWith } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const somethings: QueryResolvers['somethings'] = () => {
  return db.something.findMany()
}

export const something: QueryResolvers['something'] = ({ id }) => {
  return db.something.findUnique({
    where: { id },
  })
}

export const createSomething: MutationResolvers['createSomething'] = ({
  input,
}) => {
  return db.something.create({
    data: input,
  })
}

export const updateSomething: MutationResolvers['updateSomething'] = ({
  id,
  input,
}) => {
  validateWith(async () => {
    const sth = await db.something.findUnique({
      where: { id },
    })

    if (sth.name !== 'can update') {
      throw new MyCustomError('Cannot update something.')
    }
  })

  return db.something.update({
    data: input,
    where: { id },
  })
}

export const deleteSomething: MutationResolvers['deleteSomething'] = ({
  id,
}) => {
  return db.something.delete({
    where: { id },
  })
}

export class MyCustomError extends RedwoodError {
  constructor(message: string, extensions?: Record<string, any>) {
    super(message, extensions)
  }
}
