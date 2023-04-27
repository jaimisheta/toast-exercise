import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PopupSnackbar from '../components/snackbar/popupSnackbar';
import userEvent from '@testing-library/user-event';

describe('Snackbar component unit test', () => {
    const props = {
        open: true,
        setOpen: () => { },
        submissionEntry: {
            id: '123',
            data: {
                email: 'jaimi@gmail.com',
                firstName: 'Jaimi',
                lastName: 'sheta',
                liked: true,
            },
        },
        saveItem: () => { },
    };

    test('should show snackbar', async () => {
        render(<PopupSnackbar {...props} />);
        const alert = screen.getByRole('alert');
        expect(alert).toBeInTheDocument();
    });

    test('should show like and close button', async () => {
        render(<PopupSnackbar {...props} />);
        const buttons = screen.queryAllByRole('button');
        expect(buttons).toHaveLength(2);
    });

    test('should save item while clicking like button ', async () => {
        jest.spyOn(props, 'saveItem').mockImplementation(() => { });
        render(<PopupSnackbar {...props} />);
        const likeButton = screen.getByText('LIKE');
        await userEvent.click(likeButton);
        expect(props.saveItem).toHaveBeenCalled();
    });
});
