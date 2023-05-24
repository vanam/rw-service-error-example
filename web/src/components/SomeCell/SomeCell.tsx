import type {
  FindSomethingQuery,
  FindSomethingQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

export const QUERY = gql`
  query FindSomethingQuery($id: Int!) {
    something: something(id: $id) {
      id
      name
    }
  }
`

const MUTATION = gql`
  mutation somethingMutation($id: Int!, $input: UpdateSomethingInput!) {
    updateSomething(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindSomethingQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  something,
}: CellSuccessProps<FindSomethingQuery, FindSomethingQueryVariables>) => {
  const [somethingMutation] = useMutation(MUTATION, {
    refetchQueries: [{ query: QUERY, variables: { id: something.id } }],
    onCompleted: () => {
      toast.success('Success')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleSomethingMutation = () => {
    somethingMutation({
      variables: {
        id: something.id,
        input: { name: (Math.random() + 1).toString(36).substring(7) },
      },
    })
  }
  return (
    <>
      <div>{JSON.stringify(something)}</div>
      <button
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={handleSomethingMutation}
      >
        Press this
      </button>
    </>
  )
}
