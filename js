  // données classe ou fammille
                var idclasse=document.getElementsByName('idclasse[]');
                var classe=document.getElementsByName('classe[]');
                var valeurmin=document.getElementsByName('valeurmin[]');
               //données produits
               var id=document.getElementsByName('id[]');
               var name=document.getElementsByName('name[]');
               var quantity=document.getElementsByName('quantity[]');
               var data =[];
              
               
               for (var x = 0; x<quantity.length; x++) {
                    var idclasseID=idclasse[x].value;
                    var classeID= classe[x].value;
                    var valeurminID =valeurmin[x].value;

                    var idID =id[x].value;
                    var nameID =name[x].value;
                    var quantityID =quantity[x].value;


                         data.push(
                            { id: idclasseID, classe: classeID, minimum: valeurminID,
                                produits: [
                                    {idpro: idID, produitname:nameID, qte:quantityID},
                                ]
                             });

            }

           

            console.log(data);

            var errors={

            }
            var form_data=[]

           

           

            localStorage.setItem('data',JSON.stringify(data));
            const datas=JSON.parse(localStorage.getItem('data'));
            datas.map((item)=>{
                console.log(item.classe);
                //console.log(item.minimum);
              // $(`#${item.classe}`).html(getErros(item))
               })
            
            const getErros=(item)=>{
    
                return getTotal(item.classe)<parseInt(item.minimum)?`La quantite minimal n'est pas respecte pour la famille de produit ${item.classe}`:``
            }
