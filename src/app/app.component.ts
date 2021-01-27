import { Component } from '@angular/core';
import { FormGroupName } from '@angular/forms';
import { Produto } from '../module/produto.model';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Nome da Aplicação
  appName = 'Sistema de Produto';

  // Declaração das Variveis & Pegar as Variveis que vem do Modulo Produtos
  public modo: String = 'lista';
  public produtos: Produto[] = [];
  public formulario: FormGroup;

    constructor(private fb: FormBuilder) {
      this.formulario = this.fb.group({
        nome: ['', Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(100),
          Validators.required
        ])],
        fornecedor: ['', Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(100),
          Validators.required
        ])],
        preco: ['', Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(8),
          Validators.required
        ])]
      });
   this.loadData();
  }


  // Metodo Remover  em Angular
    remover(item: Produto) {
      const index = this.produtos.indexOf(item);
      if (index !== -1) {
        this.produtos.splice(index, 1);
      }
      this.saveData();
    }
  // Metodo Marcar com Vendido
    marcarVendido(item: Produto) {
      item.estadoVenda = true;
      this.saveData();
    }
     // Metodo Marcar com Não Vendido
    marcarNaoVendido(item: Produto) {
      item.estadoVenda = false;
      this.saveData();
    }
     // Metodo ADICIONAR NA LISTA
    adicionar() {
      const id = this.produtos.length + 1;
      const nome = this.formulario.controls['nome'].value;
      const fornecedor = this.formulario.controls['fornecedor'].value;
      const preco = this.formulario.controls['preco'].value;
      this.produtos.push(new Produto(id, nome, preco, fornecedor, false));
      this.saveData();
      this.clear();
    }
    // Metodo limpar os Campos.
    clear() {
      this.formulario.reset();
    }
    // Salvar no Local Storage do Navegador
    saveData() {
      const data = JSON.stringify(this.produtos);
      localStorage.setItem('produtos', data);
      this.modo = 'lista';
    }
    loadData() {
      const data = localStorage.getItem('produtos');
      if (data) {
        this.produtos = JSON.parse(data);
      } else {
        this.produtos = [];
      }
    }
    changeModo(modo:string) {
      this.modo = modo;
    }
}
