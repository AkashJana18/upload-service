import React from 'react'
import { useUploadsList } from '@w3ui/react-uploads-list'
import { withIdentity } from './components/Authenticator'
import './spinner.css'

export function ContentPage () {
  const { loading, error, data, reload } = useUploadsList()

  if (error) {
    return <Errored error={error} />
  }

  return (
    <div>
      <table className='mb3'>
        {data.map(cid => (
          <tr key={cid}>
            <td className='light-silver'>{cid}</td>
          </tr>
        ))}
      </table>
      <button type='button' onClick={reload} className='mr3'>🔄 Refresh</button>
      {loading ? <span className='spinner dib' /> : null}
    </div>
  )
}

const Errored = ({ error }) => (
  <div>
    <h1 className='near-white'>⚠️ Error: failed to list uploads: {error.message}</h1>
    <p className='light-silver'>Check the browser console for details.</p>
  </div>
)

export default withIdentity(ContentPage)
