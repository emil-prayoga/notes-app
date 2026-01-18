import Swal from 'sweetalert2';

const Notification = {
  success(message) {
    Swal.fire({
      icon: 'success',
      title: 'Berhasil!',
      text: message,
      timer: 2000,
      showConfirmButton: false,
      toast: true,
      position: 'top-end',
    });
  },

  error(message) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      confirmButtonColor: '#525dc0ff',
    });
  },

  confirm(title, text) {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#525dc0ff',
      confirmButtonText: 'Ya, lanjutkan!',
      cancelButtonText: 'Batal',
    });
  },
};

export default Notification;
