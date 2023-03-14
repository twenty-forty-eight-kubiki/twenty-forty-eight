import React from 'react'
import { getDisplayName } from '../utils/getDisplayName'
import Layout from '../components/Layout/Layout'

export const withLayout = <T extends JSX.IntrinsicAttributes>(
  Content: React.FC<T>
) => {
  const WithLayout: React.FC<T> = props => (
    <Layout>
      <Content {...props} />
    </Layout>
  )

  WithLayout.displayName = `WithLayout(${getDisplayName(Content)})`

  return WithLayout
}
