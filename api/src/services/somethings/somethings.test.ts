import type { Something } from '@prisma/client'

import {
  somethings,
  something,
  createSomething,
  updateSomething,
  deleteSomething,
} from './somethings'
import type { StandardScenario } from './somethings.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('somethings', () => {
  scenario('returns all somethings', async (scenario: StandardScenario) => {
    const result = await somethings()

    expect(result.length).toEqual(Object.keys(scenario.something).length)
  })

  scenario('returns a single something', async (scenario: StandardScenario) => {
    const result = await something({ id: scenario.something.one.id })

    expect(result).toEqual(scenario.something.one)
  })

  scenario('creates a something', async () => {
    const result = await createSomething({
      input: { updatedAt: '2023-05-24T08:48:35.426Z', name: 'String' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-05-24T08:48:35.426Z'))
    expect(result.name).toEqual('String')
  })

  scenario('updates a something', async (scenario: StandardScenario) => {
    const original = (await something({
      id: scenario.something.one.id,
    })) as Something
    const result = await updateSomething({
      id: original.id,
      input: { updatedAt: '2023-05-25T08:48:35.426Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-05-25T08:48:35.426Z'))
  })

  scenario('deletes a something', async (scenario: StandardScenario) => {
    const original = (await deleteSomething({
      id: scenario.something.one.id,
    })) as Something
    const result = await something({ id: original.id })

    expect(result).toEqual(null)
  })
})
