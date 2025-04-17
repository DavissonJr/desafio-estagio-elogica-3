import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  showSuccessModal(){
    Swal.fire({
      title: "Parabéns, filósofo!",
      text: "Seu pensamento foi salvo com sucesso!",
      icon: "success"
    });
  }

  showErrorModal(){
    Swal.fire({
      title: "Deu erro, filósofo!",
      text: "Verifique se você preencheu todos os dados corretamente!",
      icon: "error"
    });
  }
    // passar callback function
  showExcludeModal(aoConfirmar: () => void) {
    Swal.fire({
      title: "Você tem certeza?",
      text: "Você não poderá reverter essa ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, deletar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deletado!",
          text: "O pensamento foi removido.",
          icon: "success"
        });

        aoConfirmar();
      }
    });
  }
}
