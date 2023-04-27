import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Loader from '../components/loader/loader'

describe('Loader component unit test', () => {
    test('should display loader', async () => {
        // ARRANGE
        render(<Loader />)
        // screen.debug()

        // ACT
        const progress = screen.getByRole('progressbar')

        // ASSERT
        expect(progress).toBeInTheDocument();
    })
})