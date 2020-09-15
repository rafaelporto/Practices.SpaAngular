import { Routes } from '@angular/router';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { ListaProdutosComponent } from './produtos/lista-produtos/lista-produtos.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'produtos', component: ListaProdutosComponent },
    { path: 'produto-detalhe/:id', component: ListaProdutosComponent }
];