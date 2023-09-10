export class SnackBarModel {
  message: string = '';
  action: string = '';
  duration: number = 8000;
  horizontal: string = 'center';
  vertical: string = 'top';
  panelClass = ['yellow-snackbar'];
}
