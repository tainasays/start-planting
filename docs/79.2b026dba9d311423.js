"use strict";(self.webpackChunkprojeto_angular=self.webpackChunkprojeto_angular||[]).push([[79],{4079:(C,l,i)=>{i.r(l),i.d(l,{PlantasModule:()=>q});var p=i(6814),s=i(33),t=i(9468);const g=[{id:1,descricao:"Alocacia",preco:439,descricaoPreco:"\xc0 vista",imagem:"./assets/planta-1.jpg",quantidadeEstoque:3},{id:2,descricao:"Espada-de-S\xe3o-Jorge",preco:1200.5,descricaoPreco:"\xc0 vista no PIX",quantidadeEstoque:50,imagem:"./assets/espada-1.jpg"},{id:3,descricao:"Beg\xf4nia",preco:749.99,descricaoPreco:"\xc0 vista",imagem:"./assets/colorida-1.jpg",quantidadeEstoque:10},{id:4,descricao:"Ant\xfario",preco:599.99,descricaoPreco:"\xc0 vista",imagem:"./assets/folhas-largas-1.jpg",quantidadeEstoque:10},{id:5,descricao:"Aspl\xeanio",preco:299.99,descricaoPreco:"\xc0 vista",imagem:"./assets/folha-comprida-1.jpg",quantidadeEstoque:4},{id:6,descricao:"Jiboia",preco:399.99,descricaoPreco:"\xc0 vista",imagem:"./assets/folhas-largas-2.jpg",quantidadeEstoque:10},{id:7,descricao:"Espada-de-S\xe3o-Jorge",preco:499.99,descricaoPreco:"\xc0 vista",imagem:"./assets/espada-3.jpg",quantidadeEstoque:7},{id:8,descricao:"Espada-de-S\xe3o-Jorge",preco:18449.99,descricaoPreco:"\xc0 vista",imagem:"./assets/espada-2.jpg",quantidadeEstoque:10},{id:9,descricao:"Monstera",preco:1e3,descricaoPreco:"\xc0 vista",imagem:"./assets/planta-2.jpg",quantidadeEstoque:10},{id:10,descricao:"Hera",preco:2500,descricaoPreco:"\xc0 vista",imagem:"./assets/suspensa-1.jpg",quantidadeEstoque:10},{id:11,descricao:"Filodendro-brasil",preco:4500,descricaoPreco:"\xc0 vista",imagem:"./assets/trepadeira-1.jpg",quantidadeEstoque:10},{id:12,descricao:"Zamioculca",preco:20,descricaoPreco:"Parcelado ou \xe0 vista",imagem:"./assets/planta-3.jpg",quantidadeEstoque:10},{id:13,descricao:"Jiboia",preco:200,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/trepadeira-2.jpg",quantidadeEstoque:10},{id:14,descricao:"Filodendro",preco:50,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/folhas-largas-3.jpg",quantidadeEstoque:14},{id:15,descricao:"Jiboia",preco:159.99,descricaoPreco:"\xc0 vista no PIX",imagem:"./assets/trepadeira-3.jpg",quantidadeEstoque:2}];let u=(()=>{class a{constructor(){this.plantas=g}getAll(){return this.plantas}getOne(e){return this.plantas.find(o=>o.id===e)}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();function m(a,n){if(1&a&&(t.TgZ(0,"div",2)(1,"a",3),t._UZ(2,"img",4),t.TgZ(3,"h2",5),t._uU(4),t.qZA(),t.TgZ(5,"p",6),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"p",7),t._uU(9),t.qZA(),t.TgZ(10,"button",8),t._uU(11," Comprar "),t.qZA()()()),2&a){const e=n.$implicit;t.xp6(1),t.MGl("routerLink","/plantas/",e.id,""),t.xp6(1),t.Q6J("src",e.imagem,t.LSH),t.xp6(2),t.hij(" ",e.descricao," "),t.xp6(2),t.hij(" ",t.xi3(7,5,e.preco,"BRL")," "),t.xp6(3),t.hij(" ",e.descricaoPreco," ")}}let f=(()=>{class a{constructor(e,o){this.plantasService=e,this.route=o}ngOnInit(){const e=this.plantasService.getAll();this.route.queryParamMap.subscribe(o=>{const r=o.get("descricao")?.toLowerCase();this.plantas=r?e.filter(d=>d.descricao.toLowerCase().includes(r)):e})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(u),t.Y36(s.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-plantas"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__description"],["type","button",1,"product-item__buy-button"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0),t.YNc(1,m,12,8,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",o.plantas))},dependencies:[p.sg,s.rH,p.H9],styles:['.product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid #90ffdc;transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--purple);font-family:Kosugi Maru,sans-serif}.product-item__price[_ngcontent-%COMP%]{color:var(--green);font-size:32px;font-weight:700;font-family:Kosugi Maru,sans-serif}.product-item__description[_ngcontent-%COMP%]{color:gray;font-size:12px;font-size:"Kosugi Maru",sans-serif}.product-item__buy-button[_ngcontent-%COMP%]{background-color:#90ffdc;border:none;color:gray;font-size:20px;padding:6px 12px;font-family:Kosugi Maru,sans-serif}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}']}),a})();var _=i(8010);let h=(()=>{class a{constructor(e){this.snackBar=e}notificar(e){this.snackBar.open(e,"OK",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(_.ux))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var P=i(8594),c=i(95);const v=[{path:"",component:f},{path:":id",component:(()=>{class a{constructor(e,o,r,d){this.plantasService=e,this.route=o,this.notificacaoService=r,this.carrinhoService=d,this.quantidade=1}ngOnInit(){const o=Number(this.route.snapshot.paramMap.get("id"));this.planta=this.plantasService.getOne(o)}adicionarAoCarrinho(){this.notificacaoService.notificar("O produto foi adicionado ao carrinho");const e={...this.planta,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(e)}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(u),t.Y36(s.gz),t.Y36(h),t.Y36(P.e))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-detalhes-plantas"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number",3,"ngModel","ngModelChange"],[1,"product__availability"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0)(1,"div",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"h2",4),t._uU(5),t.qZA(),t.TgZ(6,"h3",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"p"),t._uU(10,"Estoque dispon\xedvel:"),t.qZA(),t.TgZ(11,"label"),t._uU(12," Quantidade: "),t.TgZ(13,"input",6),t.NdJ("ngModelChange",function(d){return o.quantidade=d}),t.qZA(),t._uU(14," unidade(s) "),t.qZA(),t.TgZ(15,"p",7),t._uU(16),t.qZA(),t.TgZ(17,"button",8),t.NdJ("click",function(){return o.adicionarAoCarrinho()}),t._uU(18," Adicionar ao carrinho "),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("src",null==o.planta?null:o.planta.imagem,t.LSH),t.xp6(3),t.Oqu(null==o.planta?null:o.planta.descricao),t.xp6(2),t.Oqu(t.xi3(8,5,null==o.planta?null:o.planta.preco,"BRL")),t.xp6(6),t.Q6J("ngModel",o.quantidade),t.xp6(3),t.hij(" ",null==o.planta?null:o.planta.quantidadeEstoque," "))},dependencies:[c.Fj,c.wV,c.JJ,c.On,p.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px;font-family:Kosugi Maru,sans-serif;color:var(--purple)}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0;font-family:Kosugi Maru,sans-serif;color:gray}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__availability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}button[_ngcontent-%COMP%]{background-color:var(--green);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer;font-family:Kosugi Maru,sans-serif;border-radius:3px;font-weight:500}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),a})()}];let x=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[s.Bz.forChild(v),s.Bz]}),a})(),q=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[p.ez,x,c.u5]}),a})()}}]);