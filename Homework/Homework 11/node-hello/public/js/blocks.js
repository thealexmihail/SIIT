$(document).ready(() => {
    const getLink = (block) => {
        const { id } = block;
        return `<li id="${id}"><a href="#" data-block="${id}" id="remove" >
        <i  class="fas fa-minus-circle"></i></a> <a href="#" id="display-block">${id}</a></li>`
    }

    $.ajax('/blocks', {
        success: (blocks) => {
            const blockElements = blocks.map(getLink);
            $('#blocks').append(blockElements);
        }
    });

    $('#blocks').on('click', '#display-block', (event) => {
        event.preventDefault();
        const id = $(event.currentTarget).parent().attr('id');
        $.ajax(`/blocks/${id}`, {
            success: (block) => {
                const { description } = block;
                $('#block-description').css('color', 'inherit').text(description);
                $('#id-new').val(id);
                $('#description-new').val(description);
            },
            error: () => {
                $('#block-description').css('color', 'red').text('No block found');
            }
        });
    })

    $('#blocks').on('click', 'a[data-block]', (event) => {
        event.preventDefault();
        const id = $(event.currentTarget).parent().attr('id');
        const target = $(event.currentTarget);
        console.log(id);
        $.ajax(`/blocks/${id}`, {
            type: 'DELETE'
        }).done(() => {
            target.closest('li').remove();
        });
    })

    $('form').on('submit', function (event) {
        event.preventDefault();
        const form = $(this);
        $.ajax({
            type: 'POST',
            url: '/blocks',
            data: {
                id: $('#id').val(),
                description: $('#description').val()
            }
        }).done((block) => {
            $('#blocks').append(getLink(block));
            form.trigger('reset');
        });
    });

    $('#edit-block').on('click', '#update-button', (event) => {
        event.preventDefault();

        const form = $(this);
        const id = $('li').attr('id');
        console.log(id);
        $.ajax({
            type: 'PUT',
            url: `/blocks/${id}`,
            data: {
                id: console.log($('#id-new').val()),
                description: console.log($('#description-new').val())
            }
        }).done(() => {
            form.trigger('reset');
        });
    });

});