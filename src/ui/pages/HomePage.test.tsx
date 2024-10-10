import { DependenciesContext } from '../../dependencies.ts'
import { Dependencies } from '../../domain/ports/dependencies.ts'
import { FakeUserGateway } from '../../infra/gateways/fake-inmemory-user.gateway.ts'
import { FakeAlbumGateway } from '../../infra/gateways/fake-inmemory-album.gateway.ts'
import { act, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HomePage } from './HomePage.tsx'
import { BrowserRouter } from 'react-router-dom'

describe('HomePage Rendering Tests', () => {
  let dependencies: Dependencies

  beforeAll(() => {
    dependencies = {
      userGateway: new FakeUserGateway(),
      albumGateway: new FakeAlbumGateway(),
    }
  })

  test('should render users lists', async () => {
    await act(async () => {
      render(
        <DependenciesContext.Provider value={dependencies}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </DependenciesContext.Provider>,
      )
    })

    expect(screen.getByText(/Display Interactive Test/i)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
      expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument()
    })
  })
})
