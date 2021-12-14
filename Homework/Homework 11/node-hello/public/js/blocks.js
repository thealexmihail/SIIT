$(document).ready(() => {
    const getLink = (block) => {
        const { id } = block;
        return `<li id="${id}"><i id="remove" class="fas fa-minus-circle"></i> <a href="#">${id}</a></li>`
    }

    $.ajax('/blocks', {
        success: (blocks) => {
            const blockElements = blocks.map(getLink);
            $('#blocks').append(blockElements);
        }
    });

    $('#blocks').on('click', 'a', (event) => {
        event.preventDefault();
        const id = $(event.currentTarget).parent().attr('id');
        $.ajax(`/blocks/${id}`, {
            success: (block) => {
                const { description } = block;
                $('#block-description').css('color', 'inherit').text(description);
            },
            error: () => {
                $('#block-description').css('color', 'red').text('No block found');
            }
        });
    })

    $('#blocks').on('click', '#remove', (event) => {
        event.preventDefault();
        const id = $(event.currentTarget).parent().attr('id');
        $.ajax(`/blocks/${id}`, {
            type: 'DELETE'
        }).done(() => {
            $('#remove').closest('li').remove();
        });
    })

    $('form').on('submit', function (event) {
        event.preventDefault();
        var form = $(this);
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

});