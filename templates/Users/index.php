<?php
/**
 * @var \App\View\AppView $this
 * @var iterable<\App\Model\Entity\User> $users
 */
// $usuarios = $this->Html->Link([
//     'controller' => 'Users',
//     'action' => 'getUsers'
// ]);
// $usuarios_json = json_encode($usuarios);
// $this->Html->scriptBlock('var usuarios = ' . "'$usuarios_json'");

// $this->Html->script('jquery-3.7.1.min.js', ['defer' => true]);
// $this->Html->script('form-builder.min.js', ['defer' => true]);
// $this->Html->script('form-render.min.js',  ['defer' => true]);

?>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js"></script>
  <!-- Bootstrap -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
  <!-- FORM BUILDER -->
  <script src="https://formbuilder.online/assets/js/form-builder.min.js"></script>
  <!-- Bootstrap-dialog -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.7/css/bootstrap-dialog.min.css">
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.7/js/bootstrap-dialog.min.js"></script>



<div class="users index content">
    <?= $this->Html->link(__('New User'), ['action' => 'add'], ['class' => 'button float-right']) ?>
    <h3><?= __('Users') ?></h3>
    
    <!-- <?php echo $this->Html->tag('div',$this->Html->image('soninho.jpg'),['id' => 'soninho']); ?> -->
    <div class="table-responsive">
        <table>
            <thead>
                <tr>
                    <th><?= $this->Paginator->sort('id') ?></th>
                    <th><?= $this->Paginator->sort('email') ?></th>
                    <th><?= $this->Paginator->sort('created') ?></th>
                    <th><?= $this->Paginator->sort('modified') ?></th>
                    <th class="actions"><?= __('Actions') ?></th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($users as $user): ?>
                <tr>
                    <td><?= $this->Number->format($user->id) ?></td>
                    <td><?= h($user->email) ?></td>
                    <td><?= h($user->created) ?></td>
                    <td><?= h($user->modified) ?></td>
                    <td class="actions">
                        <?= $this->Html->link(__('View'), ['action' => 'view', $user->id]) ?>
                        <?= $this->Html->link(__('Edit'), ['action' => 'edit', $user->id]) ?>
                        <?= $this->Form->postLink(__('Delete'), ['action' => 'delete', $user->id], ['confirm' => __('Are you sure you want to delete # {0}?', $user->id)]) ?>
                    </td>
                </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div class="paginator">
        <ul class="pagination">
            <?= $this->Paginator->first('<< ' . __('first')) ?>
            <?= $this->Paginator->prev('< ' . __('previous')) ?>
            <?= $this->Paginator->numbers() ?>
            <?= $this->Paginator->next(__('next') . ' >') ?>
            <?= $this->Paginator->last(__('last') . ' >>') ?>
        </ul>
        <p><?= $this->Paginator->counter(__('Page {{page}} of {{pages}}, showing {{current}} record(s) out of {{count}} total')) ?></p>
    </div>
</div>
<h2>Rick and Morty API</h2>
<buttom name="rickandmorty" id="rickandmorty" class="form-control">Get Rick and Morty</buttom>
<h2>Cat API</h2>
<button name="getGatos" id="getGatos" class="form-control">Get gatos</button>
<hr>
<h2>Form bulder - Formulários dinâmicos</h2>
<button name="formTemplates" id="formTemplates" class="form-control">Set Data</button>
<div id="fb-editor"></div>
<style>

</style>

<script>
document.addEventListener('DOMContentLoaded', function() {

//RICK AND MORTY API
        fetch('https://rickandmortyapi.com/api/character')
            .then((res) => res.json())
            .then(data => {
                document.getElementById('rickandmorty').addEventListener('click', function() {
                    let html = '';
                    data.results.forEach(character => {
                        html += modalContent(character.image, character.name);
                    });
                    BootstrapDialog.show({
                        title: 'Rick and Morty Characters',
                        message: html,
                        buttons: [{
                            label: 'Close',
                            action: function(dialogItself){
                                dialogItself.close();


                            }
                        }]
                    });

                });
            }).catch(error => console.error(error));
                   

// CAT API
        fetch('https://api.thecatapi.com/v1/images/search?limit=10')
            .then(response => response.json())
            .then(data => {
                document.getElementById('getGatos').addEventListener('click', function() {
                    let html = '';
                    data.forEach(cat => {
                            html += modalContent(cat.url, cat.id);
                        });
                    BootstrapDialog.show({
                        title: 'Cats',
                        message: html,
                        buttons: [{
                            label: 'Close',
                            action: function(dialogItself){
                                dialogItself.close();
                            }
                        }],
                    });
                    
                })

                
            }).catch(error => console.error(error));
            
    function modalContent(img, id) {
        let modalContent = '';
        modalContent += `
            <div>
                <h2>${id}</h2>
                <img src="${img}" alt="${id}" style="max-width: 100%; height: auto;">
            </div>
        `;
        return modalContent;
    }
                
    

// FORM BUILDER
    var fbEditor = jQuery('#fb-editor');//document.getElementById('fb-editor');
    var formData = '[{"type":"text","label":"Full Name","subtype":"text","className":"form-control","name":"text-1476748004559"},{"type":"select","label":"Occupation","className":"form-control","name":"select-1476748006618","values":[{"label":"Street Sweeper","value":"option-1","selected":true},{"label":"Moth Man","value":"option-2"},{"label":"Chemist","value":"option-3"}]},{"type":"textarea","label":"Short Bio","rows":"5","className":"form-control","name":"textarea-1476748007461"}]';

    document.getElementById('formTemplates').addEventListener('click', async function() {
        $(fbEditor).formBuilder().promise.then(formBuilder => {
            formBuilder.actions.setData(formData);
        });
    });
});

</script>
<style>
    .form-control {
    background-color: #d33c43;
    border: 0.1rem solid #d33c43;
    border-radius: 0.4rem;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 1.1rem;
    font-weight: 700;
    height: 3.8rem;
    letter-spacing: .1rem;
    line-height: 3.8rem;
    padding: 0 3rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;
    width: auto;
    }
</style>