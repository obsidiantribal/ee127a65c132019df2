ScriptAPI = {
    fa_register_scheduler: {
        fn01: function (village, target, unit, instance) {
            let distance = ScriptAPI.fn_global03(village, target);
            let duration = distance * unit * 6e4;
            return new Date(Math.round((instance - duration) / 1e3) * 1e3);  
        },
        fn02: function(index) { 
            return '4d3c0289be7165fa'.split(!0 && '').reduce((acc, _, i, arr) => i < index && acc + arr[~~(Math.random() * 16)] || acc, ``);
        },
        fn03: function(event) {
            let _=$('#fa_register_popup_box #fa_widget_toggle').find('select, input'), i=_.slice(0, 3).map((i, _) => _[_['\u0074\u0079\u0070\u0065'] == 'checkbox' && 'checked' || 'value']);
            !i[0] && _.slice(1).prop('disabled', []) || _.eq(1).prop('disabled', ![]) && _.slice(2, 5).prop('disabled', i[1] == '1' && []||![]).trigger('change');
        },
        fn04: function(event) {
            return $(this).closest('div').find('h4').text((i, _) => _.replace(/\d+/, this.value.match(/\d{1,3}\|\d{1,3}/g)?.length||0) || ``);
        },
        fn05: function(event) {
            let i=event['\u0074\u0079\u0070\u0065'].toUpperCase(null), _=this['\u0074\u0061\u0067\u004E\u0061\u006D\u0065'], l=$(this).closest('table').find('tr :nth-child(' + (!0 && $(this).parent(Node).prop('cellIndex') + 1) + ') :first-child:not(option)');
            const index = {'0': [!0, '∞', '∞'], '1': [!1, '', '0'], '2': [!1, '', '%']}[this.value];
            _ == 'SELECT' && i == 'CHANGE' && l.slice(2).prop('disabled', index[0]).val(index[1]).attr('value', index[1]).attr('placeholder', index[2]) && !ScriptAPI.fn_global12.call(this) || _ == 'IMG' && i == 'CLICK' && (this.src.match(/attacco|supporto/) ? $(this).closest('tr').find('img[src*="fxutility"]').addClass('transparent') && $(this).removeClass('transparent') : $(this).toggleClass('transparent').hasClass('transparent') && l.prop('disabled', []) || l.slice(0, l[1].value == '0' && 2 || 7).prop('disabled', ![])) || _ == 'INPUT' && i == 'CHANGE' && $(this).val(this.value.replace(/\D+/, ``) + `${l[1].value == '2' && Number(this.value) && '%' || ``}`) && !ScriptAPI.fn_global12.call(this) || _ == 'I' && i == 'CLICK' && {'fa-circle-plus': ScriptAPI.fa_register_scheduler.fn16, 'fa-circle-xmark': ScriptAPI.fa_register_scheduler.fn17}[this.classList[1]].call(this);
        },
        fn06: function(event) {
            $(this).val(function(i, l) { 
                return `${l.match(/\d+/)?.[0] || ``}`.padStart(3, '0') + '.ms';
            });
        },
        fn07: function(event) {
            let dropdownOptions = $('#fa_register_scheduler #fa_widget_targets_table tr td:nth-child(2)').get(null).reduce((acc, {textContent: value}) => acc + `<option value="` + value + `">` + value + `</option>`, `<option value="AUTOMATIC">AUTOMATIC</option>`);
            $('#fa_widget_villages_table > tbody > tr:nth-child(1) td:nth-child(3) select').each(function(i) {
                let _ = this['\u0076\u0061\u006C\u0075\u0065'];
                $(this).html(dropdownOptions).val(BlobEvent && $(this).find('option[value="' + _ + '"]').length && _ || 'AUTOMATIC');
            });
        },
        fn08: function(event) {
            let settingsAggregator = $('#fa_register_popup_box #fa_widget_toggle').find('input, select').map((i, _) => !i ? _.checked : (i == 1 || i == 2) && _.value || ScriptAPI.fn_global28(_.value) || null);
            let [select_option, input_start, input_end, catapult] = [
                $('#fa_widget_18').prop('value'), ...$('#fa_widget_18').nextAll('input').map((i, _) => _.value), 
                '<select>' + $('#fa_register_popup_box img[src*=buildings]').get(undefined).reduce(function i(acc, init, index, {length: l}) { 
                    return acc + `<option value="${i.init = init.src.match(/(\w+).png/)[1]}"` + (init.className == 'visible' && ' selected' || ``) + `>` + i.init.toUpperCase(Number) + `</option>${index + 1 == l && '</select>' ||``}`}, ``
                ),
            ];
            ScriptAPI.fa_register_scheduler.fn38(this) || $('#fa_register_popup_box #fa_widget_villages_table').parent('div').removeClass('hidden').children('table').append(function(i) {
                let villageOptionElements = $('#fa_widget_targets_table a').get(undefined).reduce((acc, {textContent: _}) => _ && acc + `<option value="` + _ + `">` + _ + `</option>` || acc, ``), villageListMap = $('#fa_widget_registered, #fa_widget_villages_table').find('> \u0074\u0062\u006F\u0064\u0079 > tr:nth-child(1) > td:nth-child(2)').map((i, _) => _.textContent).get(null), rowGroupCount = $('#fa_register_popup_box #fa_widget_villages_table > \u0074\u0062\u006F\u0064\u0079').length, reference = $('#fa_register_popup_box > div > div > div > div:eq(7)').prop('outerHTML');
                return $('#fa_widget_villages textarea').val((i, l ) => l.split('\x20').filter((village) => $('#fa_widget_villages input[type=checkbox]').prop('checked')? !villageListMap.includes(village) : [])?.reduce((acc, item) => acc + '\x20' + item)  ||  ``).trigger('input').get(0).value.split('\x20').reduce((acc, village, i) => acc + `<tbody><tr><td>${rowGroupCount + i + 1}</td><td><a href="/game.php?village=${APIUpdated.database[village].villageID}&screen=overview" target="_blank" rel="noopener noreferrer">${village}</a></td><td><select><option value="AUTOMATIC">AUTOMATIC</option>${villageOptionElements}</select></td><td><input type="datetime-local" max="9999-12-31T23:59" step="1" value="` + (settingsAggregator[0] ? ScriptAPI.fn_global24(settingsAggregator[1] == '1' && $('#fa_widget_10').text().replace(/Z/, ``) || settingsAggregator[2] == '1' && settingsAggregator[3] || settingsAggregator[3] + Math.random() * (settingsAggregator[4] - settingsAggregator[3]) || 'new') : ``) + `"></td><td><input type="text" value="` + (~~(select_option == 1 && input_start || Number(input_start) + Math.random() * (input_end - input_start) || 0) + ``).padStart(3, '0') + `.ms" onchange="ScriptAPI.fa_register_scheduler.fn06.call(this);" placeholder="000" maxlength="6"></td><td>${catapult}</td><td><a href="#" onclick="return ScriptAPI.fa_register_scheduler.fn09.call(this);">EDIT</a></td><td><i class="fa-solid fa-circle-xmark" onclick="return ScriptAPI.fa_register_scheduler.fn15.call(this);"></i></td></tr><tr class="hidden"><td colspan="100">${reference}</td></tr></tbody>`, ``);
            });
        },
        fn09: function(event) {
            return $(this).text((i, _) => _ == 'EDIT' && 'CLOSE' || 'EDIT').closest('tr').next(Function).toggleClass('hidden');
        },
        fn10: function(event) {
            JSON.parse(localStorage.fa_register_scheduler || null)?.forEach(function(init, i) {
                $(!i && '#fa_register_scheduler #fa_widget_registered' || '#fa_register_log')[!i && 'html' || 'append'](init);
            });
            ScriptAPI.fa_register_scheduler.fn21(this) || ScriptAPI.fa_register_scheduler.fn36(this) || Timing.tickHandlers.timers.init(null);
        },
        fn11: function(event) {
            let assignment = btoa(null || $('#fa_register_scheduler #fa_widget_registered').prop('innerHTML')?.replace(/∞/g, '?=').replace(/(?<=<span) class=""/g, ' class="timer"') || arguments);
            navigator.clipboard.writeText(assignment) && UI.SuccessMessage(
                'Os comandos foram exportados com sucesso!'
            );
        },
        fn12: function(event) {
            $('#fa_register_popup_box #fa_widget_targets textarea').val((i, l) => l.split('\x20')?.filter((item, index, arr) => $('#fa_widget_targets input[type=checkbox]').prop('checked') ? arr.indexOf(item) == index : []).reduce((acc, item) => acc + '\x20' + item) || ``).trigger('input');
        },
        fn13: function(event) {
            let _= $('#fa_register_popup_box .fa-awesome input').get(undefined).reduce((acc, _) => acc + `<td><input type="text" value="` + (_.value || '0') + `"></td>`, ``), reference = $('#fa_register_scheduler #fa_register_popup_box #fa_widget_targets_table tr').length;
            let [datetime_option, datetime_start, datetime_end] = $('#fa_register_scheduler #fa_register_popup_box').find('#fa_widget_15, #fa_widget_16, #fa_widget_17').map((i, input) => i && ScriptAPI.fn_global28(input.value) || input.value);
            ScriptAPI.fa_register_scheduler.fn38(this) || ScriptAPI.fa_register_scheduler.fn12(WebGLShaderPrecisionFormat) || $('#fa_register_popup_box #fa_widget_targets_table').parents(':eq(1)').removeClass('hidden').find('\u0074\u0062\u006F\u0064\u0079').append(!0 && $('#fa_widget_targets textarea').get(0).value.split('\u0020').reduce((acc, village, i) => acc + `<tr><td>` + (reference + i + 1) + `</td><td><a href="${game_data.link_base_pure}info_village&id=${APIUpdated.database[village].villageID}" target="_blank" rel="noopener noreferrer">${village}</a></td><td><input type="datetime-local" max="9999-12-31T23:59" step="1" value="` + ScriptAPI.fn_global24(datetime_option == 1 && datetime_start || datetime_start + Math.random() * (datetime_end - datetime_start) || '@') + `"></td>` + _ + `<td><i class="fa-solid fa-circle-xmark" onclick="ScriptAPI.fa_register_scheduler.fn14.call(this);"></i></td></tr>`, ``) || ``) && ScriptAPI.fa_register_scheduler.fn30(this) || ScriptAPI.fa_register_scheduler.fn07(this);
        },
        fn14: function(event) {
            return $(this).parents(':eq(1)').remove(null) && $('#fa_register_popup_box #fa_widget_targets_table tr td:nth-child(1)').text(_ => _ + 1e0) && ScriptAPI.fa_register_scheduler.fn30(this) || ScriptAPI.fa_register_scheduler.fn07(this);
        },
        fn15: function(event) {
            let higherLevelParentElement = $(this).parents(':eq(3)');
            return $(this).closest('\u0074\u0062\u006F\u0064\u0079').remove(null) && higherLevelParentElement.find('> \u0074\u0062\u006F\u0064\u0079 > tr:nth-child(1) td:nth-child(1)').text(_ => _ + 1e0) && ScriptAPI.fa_register_scheduler.fn36(this) || ScriptAPI.fa_register_scheduler.fn25(this);
        },
        fn16: function(event) {
            let _ =$(this).closest('table').find('tr:nth-child(n+2)'), Function = i => _.parent(Event).find('td:nth-child(' + (i + 2) + ') select')[0].value;
            _.length < 5e0 && _.parent(Event).append(`<tr><th><i class="fa-solid fa-` + (_.length + 1) + `"></i></th>${game_data.units.filter(_ => _ != 'militia').reduce((acc, _, i) => acc + `<td><input type="text" placeholder="${['∞', '0', '%'][Function(i)]}"` + ` value="${['∞'][Function(i)] || ``}"` + (!0 && $(this).closest('tr').find('img[src*=unit]').eq(i).hasClass('transparent') || Function(i) == 0 ? ` disabled` : ``) + `></td>`, ``)}<th colspan="2"><i class="fa-solid fa-circle-xmark"></i></th></tr>`).find('tr:nth-child(n+2)').length > 4e0 && $(this).css('cursor', 'no-drop');
        },
        fn17: function(event) {
            return $(this).parents(':eq(3)').find('thead i').css('cursor', 'pointer') && $(this).closest('\u0074\u0062\u006F\u0064\u0079').find('tr:last').remove(null);
        },
        fn18: function(event) {
            let assignment = atob(![] || $('#fa-widget-import textarea')[0].value ||Function).replace(/\?=/g, '∞');
            return $('#fa_register_scheduler #fa_widget_registered').html(assignment) && ScriptAPI.fa_register_scheduler.fn21(this) || ScriptAPI.fa_register_scheduler.fn36(this) || ScriptAPI.fa_register_scheduler.fn25(this) || Timing.tickHandlers.timers.init();
        },
        fn19: function(messages, init,_=$('#fa_register_scheduler #fa_register_log') || Function) {
            let description={
                ERROR: ['#c14848', '❌'], ALERT: ['#8b8b44', '⚠️'], SUCCESS: ['#53853b', '✅']}[init['\u0074\u006F\u0055\u0070\u0070\u0065\u0072\u0043\u0061\u0073\u0065'](null)
            ]; 
            _.append(`<span style="color: ${description[0]};">${description[1]} ${$('#fa_register_scheduler #fa_widget_10')[0].textContent.replace(/\.\d+/, ``) || []} - ${messages.match(/\d{1,3}\|\d{1,3}/g)?.reduce((msg, regex, i) => msg.replace(regex, `<a href="` + (!i && `/game.php?village=` || game_data.link_base_pure + `info_village&id=`) + APIUpdated.database[regex].villageID + (!i && `&screen=overview` || ``) + `" target="_blank" rel="noopener noreferrer">${regex}</a>`), messages) || messages}</span>`);
            _['\u0073\u0063\u0072\u006F\u006C\u006C\u0054\u006F\u0070'](-9e10);
        },
        fn20: function(instance, init = $('#fa_register_scheduler #fa_widget_1\x30') || []) {
            const Function=function(success) {
                let diference = Date.now(UI) - instance;
                init.html( function(i, HTML) { 
                    return HTML.replace(/\.\d+/, '\u002E' + ('' + Math.min(diference, 999) || 0).padStart(3, '0') || ``) || 'document'}
                );
            };
            ScriptAPI.fa_register_scheduler.fn20.intervalID = setInterval(Function, 4);
        }, 
        fn21: function(event) {
            let fa_register_server = ScriptAPI.fa_register_scheduler.fn23(undefined);
            $('#fa_widget_registered > \u0074\u0062\u006F\u0064\u0079 > tr:nth-child(1) > td:nth-child(4) > input').each(function init(i) {
                (init.instance = ScriptAPI.fn_global28(this.value) - fa_register_server) > 0 && $(this).parent(Event).nextAll(':eq(2)').html(`<span class="timer">` + ScriptAPI.fn_global23(init.instance / 1e3) + `</span>`) || $(this).closest('\u0020\u0074\u0062\u006F\u0064\u0079').remove(null) && ScriptAPI.fa_register_scheduler.fn19('A coordenada: ' +  $(this).parent(Event).prevAll(':eq(1)').text() + ' expirou e foi deletado!', 'alert');
            });
            Timing.tickHandlers.timers.init();
        },
        fn22: function(event) {
            const faRegisterFunction = function({rows: {0: {cells: {3: {firstChild: input}}}}}) { 
                return ScriptAPI.fn_global28(input.value);
            };
            $('#fa_register_scheduler #fa_widget_registered').html(function (i) {
                return $(this).find('> \u0074\u0062\u006F\u0064\u0079').sort((reg1, reg2) => faRegisterFunction(reg1) - faRegisterFunction(reg2) || BlobEvent).get(null).reduce((acc, _, i) => acc + _.outerHTML.replace(/>\d+</, '>' + (i + 1) + '<').replace(/(?<=<span) class=""/, ' class="timer"'), $(this).find('thead').prop('outerHTML') || ``);        
            });
            UI.ToolTip('[data-title]');
        },
        fn23: function(event) {
            return ScriptAPI.fn_global28(![] || $('#fa_register_scheduler #fa_widget_10')[0]?.['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']);
        },
        fn24: function(event) {
            return $('#fa_register_log span').remove(null) && ScriptAPI.fa_register_scheduler.fn25(this);
        },
        fn25: function(event) {
            let fa_register_storage = $('#fa_register_scheduler #fa_widget_registered, #fa_register_log').map(function(i) {
                return this.innerHTML.replace(/(?<=<span) class=""/g, ' class="timer"');
            });
            localStorage.setItem('fa_register_scheduler', JSON.stringify([
                fa_register_storage[0], fa_register_storage[1],
            ]));
        },
        fn26: function(event) {
            let i=this['\u0074\u0061\u0072\u0067\u0065\u0074'];
            i.localName.toUpperCase(null) == 'IMG' && $(i).parent(Node).find('img').removeAttr('class') && $(i)['\u0061\u0064\u0064\u0043\u006C\u0061\u0073\u0073']('visible');
        },
        fn27: function(event) {
            $('#fa_register_popup_box #fa_widget_villages_table').parent('div').addClass('hidden').find('\u0074\u0062\u006F\u0064\u0079').remove(null);
        },
        fn28: function(event) {
            $('#fa_register_scheduler #fa_widget_targets_table').parents(':eq(1)').addClass('hidden').find('\u0074\u0062\u006F\u0064\u0079\u002C\u0020\u0064\u0069\u0076').empty(Event) && ScriptAPI.fa_register_scheduler.fn07(this);
        },
        fn29: function(event) {
            let fa_widget_server = ScriptAPI.fa_register_scheduler.fn23(Function), fa_widget_targets = $("#fa-register-obsidian #fa_widget_targets_table tr").get(null).reduce(function(acc, {'\u0063\u0065\u006C\u006C\u0073': instance}) {
                let _ =$(instance).slice(1, -1).map(
                    (i, {'\u0066\u0069\u0072\u0073\u0074\u0043\u0068\u0069\u006C\u0064': _}) => !i && _.textContent || i == 1 && ScriptAPI.fn_global28(!0 && _.value) || Number(!0 && _.value),
                ); 
                acc[_[0]] = {
                    dropEvent: _[1], 
                    offensive: _[2], 
                    defensive: _[3], 
                    noblemans: _[4],
                }
                return acc;
            }, {});
            ScriptAPI.fn_global30(async function(i) {
                for(let fa_widget_villages of $('#fa_widget_villages_table >\u0074\u0062\u006F\u0064\u0079') || 'init') {
                    let items =$(fa_widget_villages.rows[0]).children('td').slice(1, -4).find(':first-child:not(option)'), identification = $(fa_widget_villages.rows[1]).find('img'), village = items[0].textContent, description = items[1].value;
                    let faRegisterFunction = function(destination, instance) { 
                        return ScriptAPI.fa_register_scheduler.fn01(village, destination, highestUnitFromImages, instance);
                    };
                    let faNoblemanFunction = function(event) {
                        return assignment != '\u006E\u006F\u0062\u006C\u0065\u006D\u0061\u006E\u0073' && 1 || $(fa_widget_villages).find('td:nth-last-child(2) input').get(null).reduce((acc, input) => acc + Number(input.value), 0);
                    };
                    let highestUnitFromImages = Math['\u006D\u0061\u0078'](
                            ...identification.slice(0, -2).filter((i, {className: transparent}) => !transparent).map((i, img) => APIUpdated.units[img.src.match(/(?<=_)[^\.]+/)[0]]),
                    ); 
                    let assignment = ['noblemans', 'offensive', 'defensive'].find(function(_, i) {
                        return!identification.slice(-3)[i].className;
                    });
                    await ScriptAPI.fn_global29(10) && $.each(fa_widget_targets, (target, {dropEvent, offensive, defensive, noblemans}, i) => {
                        let index={'AUTOMATIC':target} [description] || description;
                        return(fa_widget_targets[index][assignment]>0||[description].includes(index) && Function) && (items[2]['\u0076\u0061\u006C\u0075\u0065'] || faRegisterFunction(index, fa_widget_targets[index].dropEvent) > fa_widget_server) ? $(items[1]).prop('value', index) && $(items[2]).prop('value', (i, _) => _ || ScriptAPI.fn_global24(faRegisterFunction(index, fa_widget_targets[index].dropEvent) || 'document') || ``) && $(fa_widget_targets[index]).prop(assignment, (i, _) => _ - faNoblemanFunction.call(Function) || 0) && !$(fa_widget_villages).css('outline', (i, _) => fa_widget_server > ScriptAPI.fn_global28(items[2].value) && '1px solid #ffff00' || ``) : [Object['\u006B\u0065\u0079\u0073'](fa_widget_targets).slice(-1)[0], description].filter(i => i == index)['\u006C\u0065\u006E\u0067\u0074\u0068'] && !$(fa_widget_villages).css('outline', '1px solid #ff0000');
                    });
                };
            });
        },
        fn30: function(event) {
            let assignment = $('#fa_register_scheduler #fa_widget_targets_table input[type=text]').get(undefined).reduce((acc, input, i) => (acc[!(i % 3) && '0' || i % 3 == 1 && '1' || '2'] += Number(!0 && input.value) || ``) && acc, [0, 0, 0]);
            $('#fa_widget_targets_table').parents(':eq(1)').children('div').html(`<i class="fa-solid fa-gears" style="color: #ff0008;"></i><small>ATAQUES REQUERIDOS:</small>${assignment[0]}<i class="fa-solid fa-gears" style="color: #11ff00;"></i><small>APOIOS REQUERIDOS:</small>${assignment[1]}<i class="fa-solid fa-gears" style="color: #eeff00;"></i><small>NOBRES REQUERIDOS:</small>${assignment[2]}`);
        },
        fn31: function(event) {
            ScriptAPI.fn_global30(async function(i= ScriptAPI.fa_register_scheduler.l ||= ``, l=$('#fa_widget_registered'), I=$('#fa_widget_villages_table > \u0074\u0062\u006F\u0064\u0079').filter((i, {style: {outline: _}}) => _ != 'rgb(255, 0, 0) solid 1px').map((i, {'\u0072\u006F\u0077\u0073': l}) => l).get(undefined) || ``) {
                try {
                    for (let index=0;index<I.length;index++){
                        let aggregation =$(I[index][0].cells).slice(1).map(function(i) { 
                            return [0, 4, 5, 6].includes(i) && this.outerHTML.replace(/<select/, `<select onchange="ScriptAPI.fn_global12.call(this);"`) || [1, 2, 3].includes(i) && $(this).children('select, input').get(0).value.replace(/\.ms/, ``);
                        });
                        let identification = Math.round(ScriptAPI.fn_global03(
                            aggregation[0].match(/\d+\|\d+/)[0], aggregation[1]) * Math['\u006D\u0061\u0078'](  ...$(I[index][1]).find('img[src*=unit]').filter((i, {className: transparent}) => !transparent).map((i, img) => APIUpdated.units[img.src.match(/(?<=_)[^\.]+/)[0]])) * 6e4 / 1e3
                        );
                        i += `<\u0074\u0062\u006F\u0064\u0079 id="fa_rate_` + (identification *= 1e3) + `_${ScriptAPI.fa_register_scheduler.fn02(8)}"><tr><td>` + (0 || $(`#${l[0].id} > tbody`).length + 1 + index) + `</td>` + aggregation[0] + `<td><a href="${game_data.link_base_pure}info_village&id=${APIUpdated.database[aggregation[1]].villageID}" target="_blank" rel="noopener noreferrer">${aggregation[1]}</a></td><td><input type="datetime-local" max="9999-12-31T23:59" step="0.001" value="` + aggregation[2].replace(/\d+:\d+/, (regex, index, _) => _.length == 16 && regex + ':00' || regex) + `.${aggregation[3]}" disabled></td><td><input type="datetime-local" max="9999-12-31T23:59" step="1" value="` + ScriptAPI.fn_global24(![] || ScriptAPI.fn_global28(aggregation[2]) + identification) + `" disabled></td>` + aggregation[4] + `<td><span class="timer">` + ScriptAPI.fn_global23(UI && (ScriptAPI.fn_global28(aggregation[2]) - ScriptAPI.fa_register_scheduler.fn23(this) || 0.00) / 1e3) + `</span></td>` + aggregation[5] + aggregation[6] + `</tr>` + I[index][1].outerHTML + `</\u0074\u0062\u006F\u0064\u0079>`;
                        await ScriptAPI.fn_global29(10);
                    };
                    l.append(i) && ScriptAPI.fa_register_scheduler.fn22(this) || ScriptAPI.fa_register_scheduler.fn36(this) || ScriptAPI.fa_register_scheduler.fn25(this) || Timing.tickHandlers.timers.init();
                } catch {
                    UI.ErrorMessage('Para agendar, é necessário selecionar os alvos.<br>A opção deve ser diferente de "AUTOMATIC"', 5000);
                };
            });   
        },
        fn32: function(event) {
            return $(this).toggleClass([2].includes(!0 && $(this).parent(Event).prop('cellIndex') || ``) && 'fa-location-crosshairs fa-rotate' || 'fa-calendar-xmark fa-rotate');
        },
        fn33: function(event) {
            let originpoint = $(this).parent(Event).prop('cellIndex'), assignment = [2.00, 3.00].includes(originpoint) && [
                'val', {2: 'AUTOMATIC', 3: ``}[originpoint]] || ['trigger', 'click',
            ];
            $(this).parents(':eq(3)').find('> \u0074\u0062\u006F\u0064\u0079 > tr > td:nth-child(' + (0 || originpoint + 1) + ') > :first-child')[assignment[0]](assignment[1]);
        },
        fn34: function(event) {
            $.post(game_data.link_base_pure + 'groups&ajax=load_villages_from_group', {group_id: this.value, h: game_data.csrf}).then((xhr) => $('#fa_widget_villages textarea').val(xhr.html.match(/\d+\|\d+/g)?.reduce((acc, elm) => acc + '\x20' + elm) || ``).trigger('input') || []);
        },
        fn35: function(event) {
            return $(this).parents(':eq(3)').find('> \u0074\u0062\u006F\u0064\u0079:not([class*="effect-previous"])').remove(null) && ScriptAPI.fa_register_scheduler.fn36(this) || ScriptAPI.fa_register_scheduler.fn25(this);
        },
        fn36: function(event) {
            $('#fa_widget_info_targets').html((i, e, init = $('#fa_widget_registered > \u0074\u0062\u006F\u0064\u0079 > tr:nth-child(1) > td:nth-child(3) > a') || ``) => [
            ...new Set(init['\x6d\x61\x70'](function(i, {textContent: UI}) { 
                    return UI;
                }),
            )].reduce(function(acc, UI, index) {
                let assignment =init.filter(function(i, {textContent: EX}) { 
                    return UI == EX;
                }).get(null).reduce(function(acc, component) {
                    return $(component).parents(':eq(2)').find('img').slice(-3).each((i, img) => img['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] ? acc[i] += 0 : i ? acc[i] += 1 : $(acc[i] += $(img).parents(':eq(3)').find('td:nth-last-child(2) input').get(null).reduce((acc, input) => acc + Number(input.value), 0) || 0) && ![]) && acc}, [0, 0, 0],
                );
                return acc += `<tr><td>${index + 1}</td><td><a href="${game_data.link_base_pure}info_village&id=${APIUpdated.database[UI].villageID}" target="_blank" rel="noopener noreferrer">${UI}</a></td><td>` + assignment[0] + `</td><td>` + assignment[1] + `</td><td>` + assignment[2] + `</td></tr>`}, ``
            ));
        },
        fn37: {
            Function: function(index) {
                return $(this)['\u0066\u0069\u006E\u0064'](
                    `> tr:nth-child(1) > td:nth-child(${index[0]}) ${index[1]}`)[index[2]](
                );
            },
            request: function(xhr, init, encampment, village, appointment, battleUnitImageSource, target) {
                const i=$(
                    '#fa_widget_10')['\u0074\u0065\u0078\u0074'](
                );
                $(init).attr('class', 'fa-effect-disappearance') && $['\u0061\u006A\u0061\u0078']({url: `/game.php?village=${encampment}&screen=place&action=command`, method: 'POST', data: $(xhr).find('#command-data-form').serialize(Document).replace(/(?<=building=)[a-z]+/, ScriptAPI.fa_register_scheduler.fn37.Function.call(init, [6, 'select', 'val']) || ``) + `${appointment.match(/&train\[\d+\]\[\w+\]=\d*/g)?.reduce((acc, item) => acc + item) || ``}` + `&submit_confirm=${battleUnitImageSource}&h=${game_data.csrf}`, 
                    success: function(xhr, s, e, fn = $(xhr).find('div.error_box') || 'document') { 
                        return fn.length ? ScriptAPI.fa_register_scheduler.fn19(`Houve um erro ao enviar a coordenada ${village}, erro: ` + fn[0].textContent.trim(), 'error') || ScriptAPI.fn_global10(1) && ScriptAPI.fn_global22(`Erro ao enviar o comando:\n\nAldeia: \`${village}\` | Alvo: \`${target[0]}|${target[1]}\`\n\nProblema encontrado: \`` + fn[0].textContent.trim() + `\``, 'error') : ScriptAPI.fa_register_scheduler.fn19(`A coordenada ${village}, alvo: ${target[0]}|${target[1]} foi enviada com sucesso!`, 'success') || TribalWars['\u0070\u006C\u0061\u0079\u0053\u006F\u0075\u006E\u0064']('chat') || ScriptAPI.fn_global10(1) && ScriptAPI.fn_global22(`Comando enviado com sucesso!\n\nAldeia: \`${village}\` | Alvo: \`${target[0]}|${target[1]}\`\n\nHorário de saída: \`${i}\``, 'success');
                    },
                    error: function(error) {
                        return ScriptAPI.fa_register_scheduler.fn19(`Verifique se a coordenada ${village} foi enviada, não é possível enviar muitos comandos ao mesmo tempo!`, 'alert') || ScriptAPI.fn_global10(1) && ScriptAPI.fn_global22(`Cuidado!, muitos comandos foram enviados ao mesmo tempo.\n\nAldeia: \`${village}\` | Alvo: \`${target[0]}|${target[1]}\`\n\n\`Verifique se foi enviado corretamente.\``, 'alert');
                    },
                    complete: function(co) {
                        return ScriptAPI.fa_register_scheduler.fn37.delete.call(init)
                    }
                });
            },
            delete: function(init) {
                return $(this)['\u0072\u0065\u006D\u006F\u0076\u0065'](null) && ScriptAPI.fa_register_scheduler.fn36(undefined) || ScriptAPI.fa_register_scheduler.fn25(this);
            },
            sigil: function(xhr, village, target, duration = Number(this.id.match(/\d+/)[0])) {
                let i=ScriptAPI.fn_global05.call(Function&& $(xhr).find(
                    '#command-data-form > div td:nth-child(2)').filter((i, l) =>  /^\d+:/.test(l.textContent) || ![])[0]['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'],
                );
                return duration == (i *= 1e3) ||(i < duration ? $(this).find(
                    '> tr:nth-child(1) > td:has(input[step*="0.001"], span) :first-child').each((index, DOM, sigil = !index && ScriptAPI.fn_global24([] && ScriptAPI.fn_global28(DOM.value) + duration - i) || $(DOM).parent(Node).prevAll(':eq(2)').children('input')[0]['\u0076\u0061\u006C\u0075\u0065']) => !index && $(DOM).attr('value', sigil + `.${(ScriptAPI.fn_global28(DOM.value) % 1e3 + ``)['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](3, '0')}`) || $(DOM).parent(Node).html(`<span class="timer">` + ScriptAPI.fn_global23(UI && (ScriptAPI.fn_global28(sigil) - ScriptAPI.fa_register_scheduler.fn23(this) || 0e0) / 1e3) + `</span>`) || undefined) && $(this).removeAttr('class').attr('id', (index, _) => _.replace(/rate_\d+/, `rescheduled_${i}`) || UI) && ScriptAPI.fa_register_scheduler.fn22(this) || Timing.tickHandlers.timers.init(null) || ScriptAPI.fa_register_scheduler.fn25(this) || ScriptAPI.fa_register_scheduler.fn19(`A coordenada ${village} foi reagendada. Motivos possíveis: presença de um Paladino, status de aflição, ou detecção de alteração nas unidades!`, 'alert') || ScriptAPI.fn_global10(1) && ScriptAPI.fn_global22(`O Comando foi reagendado:\n\nAldeia: \`${village}\` | Alvo: \`${target[0]}|${target[1]}\`\n\n\`Motivos possíveis: presença de um Paladino, status de aflição, ou detecção de alteração nas unidades!\``, 'alert') : ScriptAPI.fa_register_scheduler.fn37.delete.call(this) || ScriptAPI.fa_register_scheduler.fn19(`A coordenada ${village} foi deletada e não enviada, pois o comando chegaria após o prazo. Motivos possíveis: a aflição do alvo expirou ou houve alteração nas unidades!`, 'alert') || ScriptAPI.fn_global10(1) && ScriptAPI.fn_global22(`O Comando foi deletado e não enviado pois chegaria após o prazo.\n\nAldeia: \`${village}\` | Alvo: \`${target[0]}|${target[1]}\`\n\n\`Motivos possíveis: a aflição do alvo expirou ou houve alteração nas unidades!\``, 'alert')
                );
            },
            await: function init(i=ScriptAPI.fn_global28(ScriptAPI.fa_register_scheduler.fn37.Function.call(this, [4, 'input', 'val']) || 'init'), diference = i - (init.diference ||= '\u0030\u002E\u0030\u0030'), duration = 200 - diference) {
                let _= i - ScriptAPI.fa_register_scheduler.fn23(Function); 
                return diference >= 20e1 ? $(init.diference = i) && _ :$(init.diference = i + duration) && _ + duration;
            },
            init: async function(init) { 
                let village = ScriptAPI.fa_register_scheduler.fn37.Function.call(this, [2, 'a', 'text']), encampment = APIUpdated.database[village].villageID, [targetX, targetY] = ScriptAPI.fa_register_scheduler.fn37.Function.call(this, [3, 'a', 'text']).split('|'), description = await $.get(`/game.php?village=${encampment}&screen=overview`).then(function(xhr) {
                    return $(xhr).find('tr.home_unit strong')?.get(undefined).reduce((acc, strong) => $(acc[strong.dataset.count] = strong.textContent) && acc, {});
                });
                let battleUnitImageSource = $(this).find('img[src*=fxutility]:not(.transparent)').attr('src')?.includes('attacco') && ['attack=Ataque', 'Enviar%20ataque'] || ['support=Apoio', 'Enviar%20apoio'], appointment = $(this).find('div tr:nth-child(n+2)').get(null).reduce(function(acc, item, index, {length: l}) {
                    $(item).find('input[type="text"]').each((i, l) => acc += `&${(index && `train[${index+1}][` || ``) + game_data.units[i] + (index && ']'|| ``)}=${l.disabled ? !$(item).prevAll('tr:has(select)').find(`td:nth-child(${null || $(l).parent(Node).prop('cellIndex') + 1}) select`).prop('disabled') && !index && description[game_data.units[i]] || `` : {'0': l.value, '%': ~~(l.value.replace('%', ``) / 1e2 * description[game_data.units[i]]) || ``}[l['\u0070\u006C\u0061\u0063\u0065\u0068\u006F\u006C\u0064\u0065\u0072']]}`);
                    return acc += `${index + 1 == l && `&x=${targetX}&y=${targetY}&target_type=coord&input=${targetX}%7C${targetY}&${battleUnitImageSource[0]}` || ``}`}, ``
                );
                return $.ajax({url: `/game.php?village=${encampment}&screen=place&try=confirm`, method: 'POST', data: `${ScriptAPI.fa_register_scheduler.fn02(22)}=${ScriptAPI.fa_register_scheduler.fn02(14)}&template_id=&source_village=${encampment}` + appointment.replace(/&train\[\d+\]\[\w+\]=\d*/g, ``), 
                    success: function(xhr, s, e, fn = $(xhr).find('div.error_box') || 'error') {
                        return fn.length ? ScriptAPI.fa_register_scheduler.fn37.delete.call(init) || ScriptAPI.fa_register_scheduler.fn19(`Não foi possível requisitar a coordenada ${village}. Detalhes do erro: ` + fn[0].textContent.trim(), 'error') || ScriptAPI.fn_global10(1) && ScriptAPI.fn_global22(`Não foi possível requisitar o comando:\n\nAldeia: \`${village}\` | Alvo: \`${targetX}|${targetY}\`\n\nProblema encontrado: \`` + fn[0].textContent.trim() + `\``, 'error') : ScriptAPI.fa_register_scheduler.fn37.sigil.call(init, xhr, village, [targetX, targetY]) && setTimeout(ScriptAPI.fa_register_scheduler.fn37.request, ScriptAPI.fa_register_scheduler.fn37.await.call(init), xhr, init, encampment, village, appointment, battleUnitImageSource[1], [targetX, targetY]);
                    },
                    error: function(error) {
                        return ScriptAPI.fa_register_scheduler.fn19(`O servidor recebeu um excesso de requisições, a coordenada ${village} não pôde ser enviada!`, 'alert') || ScriptAPI.fn_global10(1) && ScriptAPI.fn_global22(`Excedeu o limite de Requisições ao servidor:\n\nAldeia: \`${village}\` | Alvo: \`${targetX}|${targetY}\`\n\n\`Esse comando não foi enviado.\``, 'alert') || ScriptAPI.fa_register_scheduler.fn37.delete.call(init);
                    },
                }); 
            },
        },
        fn38: function(event) {
            $(event).closest('div.fd-col').find('textarea').val((i, item) => item.match(/\d{1,3}\|\d{1,3}/g)?.reduce((acc, item) => acc + '\x20' + item) || ``);
        },
    },
    fa_register_assistant: {
        fn01: async function(event) {
            $('#fa_register_assistant #fa_widget_loading').removeClass('hidden').html('<h4>PROCURANDO NOVAS ALDEIAS PARA MAPEAR POR FAVOR AGUARDE...</h4><i class="fa-solid fa-spinner fa-spin-pulse" style="font-size: 30px;"></i>');
            let selector = $('#fa_register_assistant #fa_widget_init, #fa_register_assistant #fa_widget_stop, #fa_register_assistant #fa_widget_30').prop('disabled', true), barbarianSearchRadius = $('#fa_register_assistant #fa_widget_29')[0].value, template_id = $('#template_a input[type=hidden]')[0].value;
            let villages_units = await this.fn06(null), template_units = [...$('#template_a input[name*=unit]')].reduce((acc, $pb) => (acc[$pb.name.replace(/unit_/, ``)] = Number($pb.value), acc), {});
            let targetsAPIUpdated = Object.entries(APIUpdated.database).filter(([, {playerID}]) => playerID == 0).map(([village]) => village);
            let BuildingFilterVillages = [], ignoreBarbarianVillages = [];
            await this.fn08('report', (xhr) => $(xhr).find('#report_list tr[class*=report]').each((i, $pb) => ignoreBarbarianVillages.push($pb.textContent.match(/\d{1,3}\|\d{1,3}/g)[1])));
            for (let village in villages_units) {
                let templates_found = targetsAPIUpdated.filter((barbarian) => !ignoreBarbarianVillages.includes(barbarian)).map((barbarian) => ({barbarian, distance: ScriptAPI.fn_global03(village, barbarian)})).filter(({distance}) => distance <= Number(barbarianSearchRadius) || 0.00).sort((a, b) => a.distance - b.distance).slice(0, Math.min(...ScriptAPI.fn_global13.assistant.reduce((acc, unit) => (template_units[unit] && acc.push(villages_units[village][unit] / template_units[unit]), acc), [])) || 0.00).map(({barbarian}) => {
                    return ignoreBarbarianVillages.push(barbarian), {
                        village_id: APIUpdated.database[village].villageID, template_id, target_id: APIUpdated.database[barbarian].villageID
                    };
                });
                await ScriptAPI.fn_global29(10) && BuildingFilterVillages.push(...templates_found);
            };
            return BuildingFilterVillages.length ? this.fn13(BuildingFilterVillages, 1) || selector.eq(1).prop('disabled', false) : UI.ErrorMessage('Nenhum mapeamento encontrado!') || selector.prop('disabled', false) && $('#fa_widget_loading').addClass('hidden');
        },
        fn03: function(event) {
            let RequestFilters = function(resolve) { 
                let Promises = [{url: '&action=set_filter_subject', method: 'POST', data: 'filter_subject='}, {url: '&action=set_filter_current_village', method: 'POST', data: null}, {url: '&action=set_filter_max_loot', method: 'POST', data: null}, {url: '&action=set_filter_own_reports', method: 'POST', data: null}, {url: '&action=set_filter_dots', method: 'POST', data: 'filter_dots=0'}, {url: '&action=set_filter_icon', method: 'POST', data: 'filter_attack_type=1&filter_icon_operator=AND'}];
                return $.get(game_data.link_base_pure + 'report&mode=all&group_id=-1').then(async (xhr) => {
                    let selectors = $(xhr).find('input#filter_subject, input#filter_current_village, input#filter_max_loot, input#filter_own_reports, input#filter_dots_none, input[name*="filter_attack_type"][value="1"], input[value=AND], input[name="filter_icon[2]"], input[name="filter_icon[64]"]'); for (let i=0;i<selectors.length;i++) {
                        let {url, method, data} = Promises[i > 5e+0 ? 5e+0 : i];
                        (selectors[i][!i && 'value' || 'checked'] ? i < 4 || i > 6 : i > 3 && i < 7) && await $.ajax({url: game_data.link_base_pure + 'report&mode=all' + url, method, data: data + `&h=${game_data.csrf}`});
                    };
                    return resolve(this);
                });
            };
            return new Promise(RequestFilters);
        },
        fn04: function(event) {
            JSON.parse(localStorage.fa_register_assistant || null)?.forEach((_, i) => $('#fa_register_assistant').find('select, input').eq(i).prop(typeof _ == 'boolean' && 'checked' || 'value', _).trigger('change') || UI);        
        },
        fn05: async function(event) {
            $('#fa_widget_loading').removeClass('hidden').html('<h4>PROCESSANDO TODOS OS DADOS POR FAVOR AGUARDE...</h4><span id="troops" style="color: #53853b;"></span><i class="fa-solid fa-spinner fa-spin-pulse" style="font-size: 30px;"></i>');
            let selector = $('#fa_register_assistant #fa_widget_init, #fa_register_assistant #fa_widget_stop, #fa_register_assistant #fa_widget_30').prop('disabled', true);
            let villages_units = await this.fn06(null), template_activated = [...$('input#fa_widget_20:checked').closest('tr')].reduce((acc, $pb) => (acc[$pb.id] = [...$($pb).find('[name*=unit], #distance, [id*=loot], [id*=dots]')].reduce((acc, $pb) => (acc[!$pb.id ? $pb.name : $pb.id] = $pb['\u0074\u0079\u0070\u0065'] == 'text' ? Number($pb.value) : $pb.checked, acc), {}), acc), {}), {template_a, template_b, template_c} = template_activated, [template_id_a, template_id_b] = $('#template_a input[type=hidden]:eq(0), #template_b input[type=hidden]:eq(0)').map((i, $pb) => $pb.value);
            let targetsAPIUpdated = Object.entries(APIUpdated.database).filter(([, {playerID}]) => playerID == 0).reduce((acc, [village, {villageID}]) => (acc[village] = villageID, acc), {}), $pbElement = $('#fa_register_assistant #fa_widget_27').get(0).value;
            let BuildingFilterReports = [], BuildingFilterVillages = [], ignoreBarbarianVillages = [];
            await this.fn08('report', function(xhr) { 
                return $(xhr).find('#report_list tr[class*=report]').each(function(i) {
                    let barbarian = this.textContent.match(/\d{1,3}\|\d{1,3}/g)[1], target_id = targetsAPIUpdated[barbarian];
                    let report_color = $(this).find('img[src*=dots]').attr('src').match(/\w+(?=.png)/)[0], report_loot = $(this).find('img[src*=loot]').attr('src'), max_loot = report_loot && Number(report_loot.match(/\d+(?=.png)/)[0]), report_id = this.className.match(/\d+/)[0], report_spy = $(this).find('img[src*=spy]');
                    return target_id && BuildingFilterReports.push({barbarian, target_id, report_id, report_spy, report_color, report_loot, max_loot});
                });
            });
            !$('#fa_register_assistant #fa_widget_28').prop('checked') && await this.fn08('commands', (xhr) => $(xhr).find('#commands_table tr:has(img[src*=farm])').each((i, $pb) => ignoreBarbarianVillages.push($pb.textContent.match(/\d{1,3}\|\d{1,3}/)[0])));
            for (let village in villages_units) {
                let templates_found = BuildingFilterReports.reduce((acc, $pb) => {
                    let distance = ScriptAPI.fn_global03(village, $pb.barbarian); 
                    $pb.distance = distance;
                    return !ignoreBarbarianVillages.
                        includes($pb.barbarian) && [
                        template_c, 
                        template_b, 
                        template_a,
                    ].some((template) => template && distance <= template.distance) && acc.push($pb), acc;
                }, []).sort((a, b) => ({1: 0.01, 2: 0.00})[$pbElement] ? a.distance - b.distance : b.distance - a.distance).reduce((acc, $pb) => { 
                    let village_id = APIUpdated.database[village].villageID;
                    return [
                        template_c,
                        template_b, 
                        template_a,
                    ].some((template, i) => (!i ? $pb.report_spy.length : !0) && template && $pb.distance <= template.distance && (!$pb.report_loot ? template[$pb.report_color + '_dots'] : ($pb.max_loot && template.max_loot || !$pb.max_loot && template.parcial_loot) && template[$pb.report_color + '_dots']) && (!i ? ScriptAPI.fn_global13.assistant.filter((unit) => template['unit_' + unit]).some((unit) => villages_units[village][unit] > 0) : ScriptAPI.fn_global13.assistant.filter((unit) => template['unit_' + unit] > 0).every((unit) => villages_units[village][unit] > 0 && (villages_units[village][unit] -= template['unit_' + unit]) >= 0)) && (!i ? acc.push({
                        village_id, 
                        report_id: $pb.report_id
                    }) : acc.push({
                        target_id: $pb.target_id, 
                        template_id: i == 1 ? template_id_b : template_id_a, village_id
                    }), ignoreBarbarianVillages.push($pb.barbarian) && [])), acc;
                }, []);
                await ScriptAPI.fn_global29(10) && BuildingFilterVillages.push(...templates_found); 
            };
            BuildingFilterVillages.length ? this.fn13(BuildingFilterVillages, 0) : UI.ErrorMessage('Não existem aldeias bárbaras ou unidades!') || this.fn10(!0);
            return selector.eq(1).prop('disabled', false);
        },
        fn06: async function(event) {
            let group_id = $('#fa_register_assistant .optionGroup option:selected')[0].value, villages = await this.fn07(group_id), captureTroops = {};
            await this.fn08('troops', (xhr) => $(xhr).find('.quickedit-label').each(function(i) {
                let village = this.textContent.match(/\d{1,3}\|\d{1,3}/)[0]; 
                    return !villages.includes(village) ? [] : captureTroops[village] = $(this).closest('tr').find('.unit-item').toArray(!1).reduce((acc, $pb, i) => (acc[game_data.units[i]] = Number($pb.textContent), acc), {});
                }),
            );
            return captureTroops;
        },
        fn07: function(group_id) {
            return $.post(game_data.link_base_pure + 'groups&ajax=load_villages_from_group', {group_id, h: game_data.csrf}).then((xhr) => xhr.html.match(/\d{1,3}\|\d{1,3}/g) || []);
        },
        fn08: async function(string, event) {
            return ScriptAPI.fn_global01(string, 0).includes('report') && await this.fn03(!void 0) && NaN || $.ajax({url: game_data.link_base_pure + ScriptAPI.fn_global01(string, 0), method: 'POST', data: `page_size=1000&h=${game_data.csrf}`}).then(async (xhr) => {
                let pagedNavItem = $(xhr).find('.paged-nav-item'), pageSize = [xhr]; for (let i=0;i<pagedNavItem.length;i++) {
                    let response = await $.get(game_data.link_base_pure + ScriptAPI.fn_global01(string, 1) + (!ScriptAPI.fn_global01(string, 1).includes('report') ? `&page=${i+1}` : `&from=${(i+1)*1000}`));
                    pageSize.push(response);
                };          
                return pageSize.forEach(event);
            });
        },
        fn09: function(event) {
            return event.target.name?.includes('unit') && $.ajax({
                url: game_data.link_base_pure + `am_farm&ajaxaction=change_troops&h=${game_data.csrf}`, method: 'POST', data: $(event.target).closest('tr').find('[name*=unit]').toArray(null).reduce((acc, unit) => unit.checked ? acc + `&` + unit.name.replace(/unit_/, ``) + '=on' : acc, ``) + '&target_screen=am_farm',
            });
        },
        fn10: function(event) {
            let [timeoption_start, timeoption_end] = $('#fa_register_assistant #fa_widget_22, #fa_register_assistant #fa_widget_23').map((i, input) => ScriptAPI.fn_global05.call(input.value) || 0.00), timeoption_select = $('#fa_register_assistant #fa_widget_21 option:selected')[0].textContent != 'TEMPO ALEATÓRIO' ? timeoption_start : timeoption_start + Math.random() * (timeoption_end - timeoption_start);
            this.fn10.timers = setTimeout(_ => this.fn05(null), timeoption_select * 1000);
            return $('#fa_register_assistant #fa_widget_loading').find('h4').html(`REINICIANDO A FARM EM:&nbsp;<span class="timer" style="color: #c14848;">${ScriptAPI.fn_global23(timeoption_select)}</span>&nbsp;🕐`).nextAll('div, span, i').remove(null) && Timing.tickHandlers.timers.init();
        },
        fn11: function(event) {
            return $.get(game_data.link_base_pure + 'am_farm').then((xhr) => {
                let [template_id_a, template_new_a, template_id_b, template_new_b] = $(xhr).find('input[name*=template]').map((i, input) => input.value), template_a = $('#template_a input[name*=unit]'), template_b = $('#template_b input[name*=unit]');
                let $pbElement = `template[${template_id_a}][id]=` +template_id_a+ `&template[${template_id_a}][new]=${template_new_a}` + this.fn02.reduce((acc, unit, i) => acc + `&${unit}[${template_id_a}]=${template_a[i].value}`, ``) + `&template[${template_id_b}][id]=${template_id_b}&template[${template_id_b}][new]=${template_new_b}` + this.fn02.reduce((acc, unit, i) => acc + `&${unit}[${template_id_b}]=${template_b[i].value}`, ``) + `&h=${game_data.csrf}`;
                return ScriptAPI.fa_register_assistant.fn12($pbElement);
            });
        },
        fn12: function(event) {
            return $.ajax({url: game_data.link_base_pure + 'am_farm&action=edit_all', method: 'POST', data: encodeURI(event),
                success: function (xhr) {
                    let [template_id_a, template_new_a, template_id_b, template_new_b] = [...$(xhr).find('input[name*=template]')].map((input) => input.value);
                    $('#fa_register_assistant input[type=hidden]').each((i, input) => !i ? input.value = template_id_a : i == 1 ? input.value = template_new_a : i == 2 ? input.value = template_id_b : input.value = template_new_b);
                    return !UI.SuccessMessage('O Modelo foi salvo com sucesso!') && ScriptAPI.fa_register_assistant.fn15();
                },
            });
        },
        fn13: function(BuildingFilterVillages, event) {
            $('#fa_register_assistant #fa_widget_loading').find('h4').html({0: 'AUTOFARM INICIADO! 🏇', 1: 'MAPEAMENTO INICIADO! 🎠'}[event]).after('<div class="progress-bar live-progress-bar progress-bar-alive"><div style="background: #4caf50;"></div><span class="label"></span></div>');
            let updateProgressBar = $('.progress-bar'), [timeoption_start, timeoption_end] = $('#fa_widget_25, #fa_widget_26').map((i, input) => Number(input.value) || 0e0), timeoption_select = $('#fa_widget_24 option:selected')[0].textContent != 'TEMPO ALEATÓRIO' ?  timeoption_start : timeoption_start + Math.random() * (timeoption_end - timeoption_start), TribalWarsRequest = function(index) {
                let source = BuildingFilterVillages[index].village_id, template_id = BuildingFilterVillages[index].template_id, target = BuildingFilterVillages[index].target_id, report_id = BuildingFilterVillages[index].report_id;
                let baseURL = `/game.php?village=${source}&screen=am_farm&mode=farm&ajaxaction=farm`, dataURL = report_id ? [baseURL + `_from_report&json=1`, {report_id, h: game_data.csrf}] : [baseURL + `&json=1`, {target, template_id, source}];
                TribalWars.post(dataURL[0], null, dataURL[1], 
                function(event) {
                    return $('#fa_register_assistant #fa_widget_loading').find('span').html('<b>' + event.success + '</b>') && updatedProgressBar(index+1);
                }, 
                function(event) {
                    let $pbElement = ScriptAPI.fa_register_assistant.fn13.timers;
                    return _('8c51142762038a5b8e6c677aabcbedff') != event ? updatedProgressBar(index+1) : !$pbElement.forEach((referrer) => clearTimeout(referrer)) && BuildingFilterVillages.splice(0, BuildingFilterVillages.length, ...BuildingFilterVillages.filter((template) => template.village_id != source)) && !BuildingFilterVillages.length ? updatedProgressBar(null) : $pbElement.splice(0, $pbElement.length, ...BuildingFilterVillages.map((el, i) => setTimeout(TribalWarsRequest, i * timeoption_select, i)));
                });
            };
            let updatedProgressBar = _ => !UI.updateProgressBar(updateProgressBar, _ ?? 0, BuildingFilterVillages.length) && (!_ || _ == BuildingFilterVillages.length) && {
                0e0: _=> ScriptAPI.fa_register_assistant.fn10(this), 1e0: _=> $('#fa_register_assistant #fa_widget_loading').addClass('hidden') && $('#fa_register_assistant #fa_widget_init, #fa_register_assistant #fa_widget_30').prop('disabled', ![])}[event]('?='); ScriptAPI.fa_register_assistant.fn13.timers = BuildingFilterVillages.map(
                    (_, i) => setTimeout(TribalWarsRequest, i * timeoption_select, i,
                ),   
            );   
        },
        fn14: function(event) {
            ScriptAPI.fa_register_assistant.fn13.timers && ![...this.fn13.timers, this.fn10.timers].forEach(a => clearTimeout(a) || 0.00) || clearTimeout(this.fn10.timers);
            return $('#fa_register_assistant #fa_widget_init, #fa_register_assistant #fa_widget_30').prop('disabled', false) && $('#fa_widget_loading').addClass('\u0068\u0069\u0064\u0064\u0065\u006E');
        },
        fn15: function(event) {
            localStorage.setItem('fa_register_assistant', JSON.stringify(
                $('#fa_register_assistant').find('select, input').map((i, _) => _.type == 'checkbox' ? _.checked : _.value).get(null),
            ));
        },
    },
    fa_register_treasures: {
        fn01: async function(event) {
            let selector = $('#fa_widget_39 #fa_widget_init'); if (true && !selector.prop('checked') || selector.prop('disabled', true) && ![]) return ![this.fn01.timers, this.fn05.timers].forEach(a => clearTimeout(a) || 0.00) && $('#fa_register_treasures #fa_widget_resources_table').addClass('hidden') && $('#fa_widget_38').html('\x30\x30\x3a\x30\x30\x3a\x30\x30');
            let [village_id, group_id] = $('#fa_register_treasures').find('.optionVillage option:selected, .optionGroup option:selected').map((i, input) => !i ? APIUpdated.database[input.textContent.match(/\d{1,3}\|\d{1,3}/)[0]].villageID : input.value), [timeoption_start, timeoption_end] = $('#fa_widget_36, #fa_widget_37').map((i, input) => ScriptAPI.fn_global05.call(input.value) || 0.00), timeoption_select = $('#fa_widget_35 option:selected')[0].textContent != 'TEMPO ALEATÓRIO' ? timeoption_start : timeoption_start + Math.random() * (timeoption_end - timeoption_start);
            let BuildingRequestResources = '\u0074\u0061\u0072\u0067\u0065\u0074\u005F\u0069\u0064\u003D\u0030\u0026\u0073\u0065\u006C\u0065\u0063\u0074\u002D\u0061\u006C\u006C\u003D\u006F\u006E';
            await this.fn04('market', village_id, group_id, (xhr) => $(xhr).find('tr.supply_location').each(function(i) {
                let resources = [...$(this).find('td a, td.wood, td.stone, td.iron, td.traders')].reduce((acc, el, i) => (acc[!el.className && 'village' || el.className] = !i ? this.dataset.village : Number(i != 4 ? el.dataset.res : this.dataset.capacity), acc), {});
                    let componentFractions = {
                        wood: 0.3373493975903614, stone: 0.3614457831325301, iron: 0.30120481927710846,
                    };                                                                              
                    let $pbElement = ['wood', 'stone', 'iron'].reduce((acc, $pb) => acc.push(Math.min(resources[$pb], resources.traders * componentFractions[$pb]) || UI) && acc, []);
                    BuildingRequestResources += `&resource[${resources.village}][wood]=${~~($pbElement[0])}&resource[${resources.village}][stone]=${~~($pbElement[1])}&resource[${resources.village}][iron]=${~~($pbElement[2])}&select-village=${resources.village}`;
                }),
            );
            BuildingRequestResources.match(/(?<=\[.*\]=)\d+/g)?.some(($pb) => $pb > 0e0) && await $.ajax({url: `/game.php?village=${village_id}&screen=market&ajaxaction=call&h=${game_data.csrf}`, method: 'POST', data: encodeURI(BuildingRequestResources)});
            ScriptAPI.fa_register_treasures.fn05(village_id, group_id) && $('#fa_register_treasures #fa_widget_38').html(`<span class="timer">${ScriptAPI.fn_global23(timeoption_select)}</span>`) && Timing.tickHandlers.timers.init();
            return this.fn01.timers = selector.prop('disabled', false) && setTimeout(_ => this.fn01(null), timeoption_select * 1000);
        },
        fn02: function(event) {
            JSON.parse(localStorage.fa_register_treasures || null)?.forEach((input, i) => $('#fa_register_treasures select, #fa_register_treasures input:not([type="checkbox"]').eq(i).val(input).trigger('change') || UI);
        },
        fn03: async function(event) {
            $('#fa_register_treasures button#fa_widget_init, #fa_register_treasures button#fa_widget_stop')['\x70\x72\x6f\x70']('disabled', true); 
            let village_id = APIUpdated.database[null || $('#fa_register_treasures .optionVillage option:selected').text().match(/\d{1,3}\|\d{1,3}/)[0]].villageID, [timeoption_start, timeoption_end] = $('#fa_widget_32, #fa_widget_33').map((i, input) => ScriptAPI.fn_global05.call(input.value) || 0.00), timeoption_select = $('#fa_widget_31 option:selected').text() != 'TEMPO ALEATÓRIO' ? timeoption_start : timeoption_start + Math.random() * (timeoption_end - timeoption_start);
            await $.get(`/game.php?village=${village_id}&screen=snob&mode=train`).then(async (xhr) => $(xhr).find('#coin_mint_fill_max').length && await $.ajax({url: `/game.php?village=${village_id}&screen=snob&action=coin`, method: 'POST', data: `count=` + $(xhr).find('#coin_mint_fill_max')[0].textContent.match(/\d+/)[0] + `&h=${game_data.csrf}`}) || []) && ScriptAPI.fa_register_treasures.fn07(!0) || $('#fa_widget_34').html(`<span class="timer">` + ScriptAPI.fn_global23(timeoption_select) + `</span>`) && Timing.tickHandlers.timers.init()
            this.fn03.timers = $('#fa_register_treasures button#fa_widget_stop').prop('disabled', false) && setTimeout(_=> this.fn03(null), timeoption_select * 1000);
        },
        fn04: function(string, village_id, group_id, event) { 
            return $.ajax({url: `/game.php?village=${village_id}&screen=${ScriptAPI.fn_global01(string, 0)}&group=${group_id}`, method: 'POST', data: `page_size=1000&h=${game_data.csrf}`}).then(async (xhr) => {
                let pagedNavItem = $(xhr).find('a.paged-nav-item'), pageSize = [xhr]; for (let i=0;i<pagedNavItem.length-1;i++) {
                    let response = await $.get(`/game.php?village=${village_id}&screen=${ScriptAPI.fn_global01(string, 1, village_id)}&page=${i+1}`);
                    pageSize.push(response);
                };          
                return pageSize.forEach(event);
            });
        },
        fn05: async function(village_id, group_id) {
            let $pbElement = ``;
            await this.fn04('transport', village_id, group_id, (xhr) => $pbElement += $(xhr).find('#trades_table')[0]?.innerHTML || ``) || $pbElement && $('#fa_register_treasures #fa_widget_resources_table').removeClass('hidden').html('<table id="container">' + $pbElement + '</table>').find('tr').each((i, $pb) => $($pb.cells).each((i, $pb) => [0, 1, 4, 7].includes(i) ? $($pb).remove() : void 0) && !$pb.className.includes('selected') && i ? $($pb).remove() : void 0) && Timing.tickHandlers.timers.init();
            this.fn05.timers = clearTimeout(this.fn05.timers) || setTimeout(($pb) => this.fn05(village_id, group_id), 60 * 1000 + Math.random() * (180 * 1000 - 60 * 1000) || []);
        },
        fn06: function(event) {
            $('#fa_widget_34').html('\u0030\u0030\u003A\u0030\u0030\u003A\u0030\u0030') && clearTimeout(this.fn03.timers);
            return $('#fa_register_treasures button#fa_widget_init').prop('disabled', false);
        },
        fn07: function(event) {
            return localStorage.setItem('fa_register_treasures', JSON.stringify(
                $('#fa_register_treasures select, #fa_register_treasures input:not([type="checkbox"]').map((i, _) => _.value).get(null),
            ));
        },
    },
    fa_register_incomings: {
        fn01: function init(event) {
            !$('#fa_widget_08').prop('checked') && !clearTimeout(this['\u0066\u006E\u0030\u0033'].timers) && $('#fa_widget_09').html('00:00:00') || !$('#fa_widget_08')[0].setAttribute('disabled', ``) && $['\u0061\u006A\u0061\u0078']({url: game_data.link_base_pure + `overview_villages&subtype=attacks&mode=incomings&group=0&action=change_page_size&page_size=1000&h=${game_data.csrf}`, method: 'GET',
                success: function(xhr) {
                    let  i=$(init['\u0069']||=0)&&$(xhr).find('#incomings_amount')[0].textContent;
                    i >  init.i  && ScriptAPI.fn_global10(3) &&ScriptAPI.fn_global22(
                        `Atenção! Você possui novos ataques chegando:\n\n\`Número de ataques: ${i}\``, 'battle'), $(init.i = i,
                    );
                    let  instance =  $(xhr)['\u0066\u0069\u006E\u0064']('#incomings_for\u006D').serialize(PageTransitionEvent );
                    instance+=instance.match(/(?<=\%5B)\d+(?=\%5D)/g)?.reduce((acc, i) => acc += `&id_${i}=on`, ``) + `&all=on&label=Etiqueta`;
                    $(xhr).find('#incomings_table tr[class]').length && !ScriptAPI.fa_register_incomings.fn02(instance) || $('#fa_widget_08').prop('disabled',  false ) && ScriptAPI.fa_register_incomings.fn03(this);
                },  
            });
        },
        fn02: function(instance) {
            $['\u0061\u006A\u0061\u0078']({url: game_data.link_base_pure + `overview_villages&mode=incomings&action=process&type=unignored&subtype=all&h=${game_data.csrf}`, method: 'POST', data: instance,
                complete: function(event) {
                    ScriptAPI.fa_register_incomings.fn03(this);
                },
            });
        },
        fn03: function(event) {
            let duration = 60 + Math.random() * (300 - 60);
            ScriptAPI.fa_register_incomings.fn03.timers = setTimeout(_ => ScriptAPI.fa_register_incomings.fn01(this), duration * 1000);
            return $('#fa_register_interface #fa_widget_08').prop('disabled', false) && $('#fa_register_interface #fa_widget_09').html(`<span class="timer">${ScriptAPI.fn_global23(duration)}</span>`) && Timing.tickHandlers.timers.init();
        },
    },  
    fa_register_equilibri: {
        fn01: function(event) {
            JSON.parse(localStorage.fa_register_equilibri || null)?.forEach((option, i) => $('#fa_register_equilibri').find('input:not([type="checkbox"]), select').eq(i).val(option).trigger('input').trigger('change') || UI);
            var _0x58d0bc='resource_balancer';var _0x34e37a='madalinoTribalWarsScripts';if(typeof TWMap!='undefined')var _0x11abe9=TWMap['mapHandler']['spawnSector'];var _0x172c0a='#001a33';var _0x54fc2c='#002e5a';var _0x24644b='#3b3b00';var _0x2d56b4='#626200';var _0x3111d='#1e003b';var _0x45e143='#3c0076';var _0x5e6c51='[[\x22theme1\x22,[\x22#E0E0E0\x22,\x22#000000\x22,\x22#C5979D\x22,\x22#2B193D\x22,\x22#2C365E\x22,\x22#484D6D\x22,\x22#4B8F8C\x22,\x2250\x22]],[\x22currentTheme\x22,\x22theme1\x22],[\x22theme2\x22,[\x22#E0E0E0\x22,\x22#000000\x22,\x22#F76F8E\x22,\x22#113537\x22,\x22#37505C\x22,\x22#445552\x22,\x22#294D4A\x22,\x2250\x22]],[\x22theme3\x22,[\x22#E0E0E0\x22,\x22#000000\x22,\x22#ACFCD9\x22,\x22#190933\x22,\x22#665687\x22,\x22#7C77B9\x22,\x22#623B5A\x22,\x2250\x22]],[\x22theme4\x22,[\x22#E0E0E0\x22,\x22#000000\x22,\x22#181F1C\x22,\x22#60712F\x22,\x22#274029\x22,\x22#315C2B\x22,\x22#214F4B\x22,\x2250\x22]],[\x22theme5\x22,[\x22#E0E0E0\x22,\x22#000000\x22,\x22#9AD1D4\x22,\x22#007EA7\x22,\x22#003249\x22,\x22#1F5673\x22,\x22#1C448E\x22,\x2250\x22]],[\x22theme6\x22,[\x22#E0E0E0\x22,\x22#000000\x22,\x22#EA8C55\x22,\x22#81171B\x22,\x22#540804\x22,\x22#710627\x22,\x22#9E1946\x22,\x2250\x22]],[\x22theme7\x22,[\x22#E0E0E0\x22,\x22#000000\x22,\x22#754043\x22,\x22#37423D\x22,\x22#171614\x22,\x22#3A2618\x22,\x22#523A34\x22,\x2250\x22]],[\x22theme8\x22,[\x22#E0E0E0\x22,\x22#000000\x22,\x22#9E0031\x22,\x22#8E0045\x22,\x22#44001A\x22,\x22#600047\x22,\x22#770058\x22,\x2250\x22]],[\x22theme9\x22,[\x22#E0E0E0\x22,\x22#000000\x22,\x22#C1BDB3\x22,\x22#5F5B6B\x22,\x22#323031\x22,\x22#3D3B3C\x22,\x22#575366\x22,\x2250\x22]],[\x22theme10\x22,[\x22#E0E0E0\x22,\x22#000000\x22,\x22#E6BCCD\x22,\x22#29274C\x22,\x22#012A36\x22,\x22#14453D\x22,\x22#7E52A0\x22,\x2250\x22]]]';var _0x1e441c='resBalancerTheme';if(localStorage['getItem'](_0x1e441c)!=undefined){let _0x7b172b=new Map(JSON['parse'](localStorage['getItem'](_0x1e441c)));Array['from'](_0x7b172b['keys']())['forEach'](_0x4d7a50=>{if(_0x4d7a50!='currentTheme'){let _0x149fb5=_0x7b172b['get'](_0x4d7a50);if(_0x149fb5['length']==0x7){_0x149fb5['push'](0x32);_0x7b172b['set'](_0x4d7a50,_0x149fb5);}}});localStorage['setItem'](_0x1e441c,JSON['stringify'](Array['from'](_0x7b172b['entries']())));}var _0x4afef4='#ffffff';var _0x126948='#000000';var _0x28dc98='#C5979D';var _0x36fef7='#2B193D';var _0x551ec1='#2C365E';var _0xf32e6f='#484D6D';var _0x25cb9c='#4B8F8C';var _0x1ddf5e=0x32;var _0x52ee4d=-0x32;var _0x23b653=-0x1e;var _0x5ecbac=0x1e;var _0x252335=_0x36fef7;var _0x4c907f=_0x308715(_0x36fef7,_0x23b653);async function _0x5eeaa8(){_0x2c8c03();_0x4d2961();_0x39867f();}_0x5eeaa8();function _0x308715(_0x5388cf,_0x521cf7){let _0x31e3ff=_0x5388cf;_0x31e3ff=_0x31e3ff['replace'](/^\s*#|\s*$/g,'');if(_0x31e3ff['length']===0x3){_0x31e3ff=_0x31e3ff['replace'](/(.)/g,'$1$1');}let _0x5a122d=parseInt(_0x31e3ff['substr'](0x0,0x2),0x10);let _0x2f70bf=parseInt(_0x31e3ff['substr'](0x2,0x2),0x10);let _0x568a46=parseInt(_0x31e3ff['substr'](0x4,0x2),0x10);const _0x55f2d7=(0x64+_0x521cf7)/0x64;_0x5a122d=Math['round'](Math['min'](0xff,Math['max'](0x0,_0x5a122d*_0x55f2d7)));_0x2f70bf=Math['round'](Math['min'](0xff,Math['max'](0x0,_0x2f70bf*_0x55f2d7)));_0x568a46=Math['round'](Math['min'](0xff,Math['max'](0x0,_0x568a46*_0x55f2d7)));return'#'+('00'+_0x5a122d['toString'](0x10))['slice'](-0x2)['toUpperCase']()+('00'+_0x2f70bf['toString'](0x10))['slice'](-0x2)['toUpperCase']()+('00'+_0x568a46['toString'](0x10))['slice'](-0x2)['toUpperCase']();}function _0x4d2961(){let _0x5327b3='<p>if\x20the\x20factor\x20is\x200\x20your\x20villages\x20will\x20receive\x20resources\x20only\x20for\x20building\x20construction(from\x20account\x20manager)\x0a</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>if\x20the\x20factor\x20is\x201\x20resources\x20will\x20be\x20distributed\x20equally,\x20at\x20the\x20end\x20of\x20balancing\x20every\x20village\x20will\x20have\x20the\x20same\x20amount\x20of\x20resources\x0a</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>if\x20it\x27s\x20for\x20example\x200.2\x20in\x20this\x20case\x20your\x20villages\x20will\x20receive\x2020%\x20from\x20average\x20value\x20of\x20each\x20resources\x20and\x20in\x20adition\x20will\x20receive\x20enough\x20resources\x20for\x20building\x20construction(from\x20account\x20manager)</p>';let _0x277632='<p>set\x20for\x20how\x20many\x20hours\x20the\x20villages\x20should\x20have\x20resources\x20for\x20building\x20construction\x0a</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>\x20your\x20account\x20manager\x20must\x20be\x20active\x20and\x20your\x20villages\x20must\x20have\x20a\x20template\x20construction\x20active,\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20otherwise\x20this\x20setting\x20will\x20be\x20ignored\x20';let _0xf888b='<p>if\x20it\x27s\x20set\x20to\x201\x20cluster\x20then\x20balancing\x20resources\x20will\x20be\x20globally\x20and\x20for\x202\x20or\x20more\x20it\x20will\x20be\x20locally\x20per\x20each\x20cluster\x0a</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>a\x20larger\x20number\x20of\x20clusters\x20results\x20in\x20a\x20shorter\x20maximum\x20travel\x20time\x20and\x20balanced\x20more\x20locally\x20which\x20is\x20less\x20optimal\x20\x0a</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>every\x20time\x20the\x20script\x20is\x20run\x20clusters\x20are\x20calculated\x20randomly\x20and\x20they\x20may\x20not\x20be\x20optimally\x20calculated\x20\x20every\x20time\x20so\x20look\x20out\x20for\x20maximum\x20travel\x20distance\x20\x0a</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>if\x20it\x27s\x20run\x20on\x20the\x20map\x20it\x20can\x20be\x20seen\x20how\x20clusters\x20were\x20formed\x20and\x20how\x20many\x20resources\x20are\x20sent\x20and\x20received\x0a</p>';let _0x2e5694='\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20<div\x20id=\x22div_container\x22\x20class=\x22scriptContainer\x22\x20style=\x22display:\x20none;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22scriptHeader\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22\x20margin-top:10px;\x22><h2>Resources\x20balancer</h2></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:absolute;top:10px;right:\x2010px;\x22><a\x20href=\x22#\x22\x20onclick=\x22$(\x27#div_container\x27).remove()\x22><img\x20src=\x22https://img.icons8.com/emoji/24/000000/cross-mark-button-emoji.png\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:absolute;top:8px;right:\x2035px;\x22\x20id=\x22div_minimize\x22><a\x20href=\x22#\x22><img\x20src=\x22https://img.icons8.com/plasticine/28/000000/minimize-window.png\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22position:absolute;top:10px;right:\x2060px;\x22\x20id=\x22div_theme\x22><a\x20href=\x22#\x22\x20onclick=\x22$(\x27#theme_settings\x27).toggle()\x22><img\x20src=\x22https://img.icons8.com/material-sharp/24/fa314a/change-theme.png\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22theme_settings\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_body\x22\x20style=\x22height:\x20600px;\x20overflow-y:\x20auto\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_main\x22\x20\x20class=\x22scriptTable\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>setting\x20name</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>setting\x20value</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>reserve\x20merchants</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:\x20center;\x20align-items:\x20center;\x20\x20\x20\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><input\x20type=\x22number\x22\x20id=\x22nr_merchants_reserve\x22\x20class=\x22scriptInput\x22\x20placeholder=\x2215\x22\x20value=\x220\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(\x27how\x20many\x20merchants\x20do\x20you\x20want\x20to\x20keep\x20home\x27,4000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>construction\x20time[hours]</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:\x20center;\x20align-items:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><input\x20type=\x22number\x22\x20id=\x22time_construction\x22\x20class=\x22scriptInput\x22\x20placeholder=\x220\x22\x20value=\x220\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(`'+_0x277632+'`,15000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>average\x20factor[0-1]</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:\x20center;\x20align-items:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><input\x20type=\x22number\x22\x20id=\x22nr_average_factor\x22\x20class=\x22scriptInput\x22\x20placeholder=\x221\x22\x20value=\x221\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(`'+_0x5327b3+'`,20000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>number\x20of\x20clusters</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:\x20center;\x20align-items:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><center><input\x20type=\x22number\x22\x20id=\x22nr_clusters\x22\x20class=\x22scriptInput\x22\x20placeholder=\x221\x22\x20value=\x221\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(`'+_0xf888b+'`,20000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20hidden\x20id=\x22tr_merchant_capacity\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>merchant\x20capacity</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:flex;justify-content:\x20center;\x20align-items:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><input\x20type=\x22number\x22\x20id=\x22merchant_capacity\x22\x20class=\x22scriptInput\x22\x20placeholder=\x221000\x22\x20value=\x271000\x27></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div><a\x20href=\x22#\x22\x20onclick=\x22UI.InfoMessage(\x27set\x20merchant\x20capacity\x20to\x20either\x201000\x20or\x201500\x27,3000)\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/dbeaf8db/graphic/questionmark.png\x22\x20style=\x22width:\x2013px;\x20height:\x2013px\x22/></a></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</center>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20type=\x22button\x22\x20onclick=\x22balancingResources()\x22\x20style=\x22margin:10px\x22\x20value=\x22start\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</center>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20id=\x22div_tables\x22\x20hidden>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><div\x20id=\x22table_stats\x22\x20style=\x22width:100%\x22></div></center><br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><div\x20id=\x22table_view\x22\x20style=\x22height:500px;width:100%;overflow:auto\x22></div></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22scriptFooter\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22\x20margin-top:5px;\x22><h5>made\x20by\x20Costache</h5></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>';$('#div_container')['remove']();$('#contentContainer')['eq'](0x0)['prepend'](_0x2e5694);$('#mobileContent')['eq'](0x0)['prepend'](_0x2e5694);if(game_data['device']!='desktop'){$('#div_body')['css']('height','500px');}$('#div_container')['css']('position','fixed');$('#div_container')['draggable']();if(game_data['locale']=='pt_PT'){$('#tr_merchant_capacity')['show']();}$('#div_minimize')['on']('click',()=>{let _0x3f3f51=Math['ceil']($('#div_container')['width']()/$('body')['width']()*0x64);if(_0x3f3f51>=_0x1ddf5e){$('#div_container')['css']({'width':'10%'});$('#div_body')['hide']();}else{$('#div_container')['css']({'width':_0x1ddf5e+'%'});$('#div_body')['show']();}});if(localStorage['getItem'](game_data['world']+'settings_resources_balancer2')!=null){let _0x42ca4d=JSON['parse'](localStorage['getItem'](game_data['world']+'settings_resources_balancer2'));$('#div_container\x20input[type=number]')['each'](function(_0xbdf663,_0x6524e3){this['value']=_0x42ca4d[_0xbdf663];});}$('#div_container\x20input[type=number]')['on']('click\x20input\x20change',()=>{let _0x2cf6ee=[];$('#div_container\x20input[type=number]')['each'](function(){var _0x28a035=this['value'];_0x2cf6ee['push'](_0x28a035);});let _0x14ce32=JSON['stringify'](_0x2cf6ee);let _0x34d24f=localStorage['getItem'](game_data['world']+'settings_resources_balancer2');if(_0x14ce32!=_0x34d24f){localStorage['setItem'](game_data['world']+'settings_resources_balancer2',_0x14ce32);}});}function _0x39867f(){let _0x546cd1='\x0a\x20\x20\x20\x20<h3\x20style=\x22color:'+_0x4afef4+';padding-left:10px;padding-top:5px\x22>after\x20theme\x20is\x20selected\x20run\x20the\x20script\x20again<h3>\x0a\x20\x20\x20\x20<table\x20class=\x22scriptTable\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20\x20id=\x22select_theme\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22theme1\x22>theme1</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22theme2\x22>theme2</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22theme3\x22>theme3</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22theme4\x22>theme4</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22theme5\x22>theme5</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22theme6\x22>theme6</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22theme7\x22>theme7</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22theme8\x22>theme8</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22theme9\x22>theme9</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22theme10\x22>theme10</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>value</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>color\x20hex</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>textColor</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22background-color:'+_0x4afef4+'\x22\x20class=\x22td_background\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22text\x22\x20class=\x22scriptInput\x20input_theme\x22\x20value=\x22'+_0x4afef4+'\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>backgroundInput</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22background-color:'+_0x126948+'\x22\x20class=\x22td_background\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22text\x22\x20class=\x22scriptInput\x20input_theme\x22\x20value=\x22'+_0x126948+'\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>borderColor</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22background-color:'+_0x28dc98+'\x22\x20class=\x22td_background\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22text\x22\x20class=\x22scriptInput\x20input_theme\x22\x20value=\x22'+_0x28dc98+'\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>backgroundContainer</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22background-color:'+_0x36fef7+'\x22\x20class=\x22td_background\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22text\x22\x20class=\x22scriptInput\x20input_theme\x22\x20value=\x22'+_0x36fef7+'\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>backgroundHeader</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22background-color:'+_0x551ec1+'\x22\x20class=\x22td_background\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22text\x22\x20class=\x22scriptInput\x20input_theme\x22\x20value=\x22'+_0x551ec1+'\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>backgroundMainTable</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22background-color:'+_0xf32e6f+'\x22\x20class=\x22td_background\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22text\x22\x20class=\x22scriptInput\x20input_theme\x22\x20value=\x22'+_0xf32e6f+'\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>backgroundInnerTable</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22background-color:'+_0x25cb9c+'\x22\x20class=\x22td_background\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22text\x22\x20class=\x22scriptInput\x20input_theme\x22\x20value=\x22'+_0x25cb9c+'\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>widthInterface</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20type=\x22range\x22\x20min=\x2225\x22\x20max=\x22100\x22\x20class=\x22slider\x20input_theme\x22\x20id=\x22input_slider_width\x22\x20value=\x22'+_0x1ddf5e+'\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20id=\x22td_width\x22>'+_0x1ddf5e+'%</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20type=\x22button\x22\x20id=\x22btn_save_theme\x22\x20value=\x22Save\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20type=\x22button\x22\x20id=\x22btn_reset_theme\x22\x20value=\x22Default\x20themes\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x0a\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20';$('#theme_settings')['append'](_0x546cd1);$('#theme_settings')['hide']();let _0x169306='';let _0x868f48=[];let _0x31b2a2=new Map();$('#select_theme')['on']('change',()=>{if(localStorage['getItem'](_0x1e441c)!=undefined){_0x169306=$('#select_theme')['find'](':selected')['text']();_0x868f48=Array['from']($('.input_theme'))['map'](_0x5d08d2=>_0x5d08d2['value']['toUpperCase']()['trim']());_0x31b2a2=new Map(JSON['parse'](localStorage['getItem'](_0x1e441c)));_0x868f48=_0x31b2a2['get'](_0x169306);Array['from']($('.input_theme'))['forEach']((_0x180473,_0x418c9a)=>{_0x180473['value']=_0x868f48[_0x418c9a];});Array['from']($('.td_background'))['forEach']((_0x85d85,_0x19780e)=>{_0x85d85['style']['background']=_0x868f48[_0x19780e];});_0x31b2a2['set']('currentTheme',_0x169306);localStorage['setItem'](_0x1e441c,JSON['stringify'](Array['from'](_0x31b2a2['entries']())));}});$('#btn_save_theme')['on']('click',()=>{_0x868f48=Array['from']($('.input_theme'))['map'](_0x3bb776=>_0x3bb776['value']['toUpperCase']()['trim']());_0x169306=$('#select_theme')['find'](':selected')['text']();for(let _0x26cdcd=0x0;_0x26cdcd<_0x868f48['length']-0x1;_0x26cdcd++){if(_0x868f48[_0x26cdcd]['match'](/#[0-9 A-F]{6}/)==null){UI['ErrorMessage']('wrong\x20colour:\x20'+_0x868f48[_0x26cdcd]);throw new Error('wrong\x20colour');}}if(localStorage['getItem'](_0x1e441c)!=undefined)_0x31b2a2=new Map(JSON['parse'](localStorage['getItem'](_0x1e441c)));_0x31b2a2['set'](_0x169306,_0x868f48);_0x31b2a2['set']('currentTheme',_0x169306);localStorage['setItem'](_0x1e441c,JSON['stringify'](Array['from'](_0x31b2a2['entries']())));});$('#btn_reset_theme')['on']('click',()=>{localStorage['setItem'](_0x1e441c,_0x5e6c51);});$('#input_slider_width')['on']('input',()=>{$('#td_width')['text']($('#input_slider_width')['val']()+'%');});if(localStorage['getItem'](_0x1e441c)!=undefined){_0x31b2a2=new Map(JSON['parse'](localStorage['getItem'](_0x1e441c)));let _0x16d854=_0x31b2a2['get']('currentTheme');document['querySelector']('#select_theme')['value']=_0x16d854;}}function _0x2c8c03(){if(localStorage['getItem'](_0x1e441c)!=undefined){let _0x1416ea=new Map(JSON['parse'](localStorage['getItem'](_0x1e441c)));let _0x2c1afc=_0x1416ea['get']('currentTheme');let _0x300607=_0x1416ea['get'](_0x2c1afc);_0x4afef4=_0x300607[0x0];_0x126948=_0x300607[0x1];_0x28dc98=_0x300607[0x2];_0x36fef7=_0x300607[0x3];_0x551ec1=_0x300607[0x4];_0xf32e6f=_0x300607[0x5];_0x25cb9c=_0x300607[0x6];_0x1ddf5e=_0x300607[0x7];if(game_data['device']!='desktop'){_0x1ddf5e=0x62;}_0x252335=_0x36fef7;_0x4c907f=_0x308715(_0x36fef7,_0x23b653);}else{localStorage['setItem'](_0x1e441c,_0x5e6c51);let _0xcbfa76=new Map(JSON['parse'](localStorage['getItem'](_0x1e441c)));let _0xaa2f08=_0xcbfa76['get']('currentTheme');let _0x36cdf1=_0xcbfa76['get'](_0xaa2f08);_0x4afef4=_0x36cdf1[0x0];_0x126948=_0x36cdf1[0x1];_0x28dc98=_0x36cdf1[0x2];_0x36fef7=_0x36cdf1[0x3];_0x551ec1=_0x36cdf1[0x4];_0xf32e6f=_0x36cdf1[0x5];_0x25cb9c=_0x36cdf1[0x6];_0x1ddf5e=_0x36cdf1[0x7];if(game_data['device']!='desktop'){_0x1ddf5e=0x62;}_0x252335=_0x36fef7;_0x4c907f=_0x308715(_0x36fef7,_0x23b653);}}window['balancingResources']=async function(){$('#fa_register_equilibri\x20button#fa_widget_init,\x20#fa_register_equilibri\x20button#fa_widget_stop')['prop']('disabled',!![])&&ScriptAPI['fa_register_equilibri']['fn08'](this);await $['post'](game_data['link_base_pure']+'groups&ajax=load_villages_from_group',{'group_id':$('#fa_register_equilibri\x20.optionGroup\x20option:selected')[0x0]['value'],'h':game_data['csrf']});let _0x3fa2c5=parseFloat(document['getElementById']('fa_widget_41')['value']);let _0xa2b1f5=parseFloat(document['getElementById']('fa_widget_42')['value']);let _0x179df1=parseInt(document['getElementById']('fa_widget_40')['value']);let _0x231b7f=0x3e8;let _0x2698bb=parseInt(document['getElementById']('fa_widget_43')['value']);_0x179df1=Number['isNaN'](_0x179df1)==!![]||_0x179df1<0x0?0x0:_0x179df1;_0x2698bb=Number['isNaN'](_0x2698bb)==!![]||_0x2698bb<0x1?0x1:_0x2698bb;_0x3fa2c5=Number['isNaN'](_0x3fa2c5)==!![]||_0x3fa2c5<0x0?0x14:_0x3fa2c5;_0xa2b1f5=Number['isNaN'](_0xa2b1f5)==!![]?0x1:_0xa2b1f5<0x0?0x0:_0xa2b1f5>0x1?0x1:_0xa2b1f5;_0x231b7f=Number['isNaN'](_0x231b7f)==!![]?0x3e8:_0x231b7f<0x3e8?0x3e8:_0x231b7f>0x5dc?0x5dc:_0x231b7f;_0x3fa2c5=_0x3fa2c5*0xe10;$('#div_container')['remove']();let {list_production:_0x59877c,map_farm_usage:_0x2d18fc}=await _0x281e38()['catch'](_0xaca063=>alert(_0xaca063));let _0x1eb46a=await _0x3795ab()['catch'](_0x55fc18=>alert(_0x55fc18));let _0x1ca80e=await _0x28671d(_0x3fa2c5,_0x2d18fc)['catch'](_0x54ed4d=>alert(_0x54ed4d));let _0x38c24e=JSON['parse'](JSON['stringify'](_0x59877c));let _0x3ce482=new Date()['getTime']();let _0x53882d=[];for(let _0x5c1d60=0x0;_0x5c1d60<_0x59877c['length'];_0x5c1d60++){_0x53882d['push']([parseInt(_0x59877c[_0x5c1d60]['coord']['split']('|')[0x0]),parseInt(_0x59877c[_0x5c1d60]['coord']['split']('|')[0x1])]);}let _0x298f99={'numberOfClusters':_0x2698bb,'maxIterations':0x64};let _0x250f41=_0x141e11(_0x53882d,_0x298f99);let _0x36986d=[];let _0x29015f=[];let _0x389a96=new Map();for(let _0x1a8081=0x0;_0x1a8081<_0x250f41['length'];_0x1a8081++){let _0x4e66b7=_0x250f41[_0x1a8081]['data'];let _0x4c5b9f=[],_0x5e0a6b=[];for(let _0x34ce66=0x0;_0x34ce66<_0x4e66b7['length'];_0x34ce66++){let _0x38edc1=_0x4e66b7[_0x34ce66]['join']('|');for(let _0x20e1cd=0x0;_0x20e1cd<_0x59877c['length'];_0x20e1cd++){if(_0x59877c[_0x20e1cd]['coord']==_0x38edc1){_0x4c5b9f['push'](_0x59877c[_0x20e1cd]);_0x5e0a6b['push'](_0x38c24e[_0x20e1cd]);let _0x25389b=0x0;if(_0x1eb46a['has'](_0x38edc1)){_0x25389b=_0x1eb46a['get'](_0x38edc1)['wood']+_0x1eb46a['get'](_0x38edc1)['stone']+_0x1eb46a['get'](_0x38edc1)['iron'];}_0x389a96['set'](_0x59877c[_0x20e1cd]['id'],{'label_cluster':_0x1a8081,'villageId':_0x59877c[_0x20e1cd]['id'],'total_resources_get':_0x25389b,'total_resources_send':0x0});break;}}}_0x36986d['push'](_0x4c5b9f);_0x29015f['push'](_0x5e0a6b);}let _0x39d2bd=0x0,_0x329c16=0x0,_0x539f54=0x0;let _0x41b06e=0x0,_0xe393b0=0x0,_0x43a015=0x0;for(let _0xe0bb9b=0x0;_0xe0bb9b<_0x59877c['length'];_0xe0bb9b++){let _0x32a1f0=_0x59877c[_0xe0bb9b]['coord'];if(_0x1eb46a['has'](_0x32a1f0)){_0x59877c[_0xe0bb9b]['wood']+=_0x1eb46a['get'](_0x32a1f0)['wood'];_0x59877c[_0xe0bb9b]['stone']+=_0x1eb46a['get'](_0x32a1f0)['stone'];_0x59877c[_0xe0bb9b]['iron']+=_0x1eb46a['get'](_0x32a1f0)['iron'];_0x59877c[_0xe0bb9b]['wood']=Math['min'](_0x59877c[_0xe0bb9b]['wood'],_0x59877c[_0xe0bb9b]['capacity']);_0x59877c[_0xe0bb9b]['stone']=Math['min'](_0x59877c[_0xe0bb9b]['stone'],_0x59877c[_0xe0bb9b]['capacity']);_0x59877c[_0xe0bb9b]['iron']=Math['min'](_0x59877c[_0xe0bb9b]['iron'],_0x59877c[_0xe0bb9b]['capacity']);}_0x41b06e+=_0x59877c[_0xe0bb9b]['wood']/_0x59877c['length'];_0xe393b0+=_0x59877c[_0xe0bb9b]['stone']/_0x59877c['length'];_0x43a015+=_0x59877c[_0xe0bb9b]['iron']/_0x59877c['length'];_0x39d2bd+=_0x59877c[_0xe0bb9b]['wood'];_0x329c16+=_0x59877c[_0xe0bb9b]['stone'];_0x539f54+=_0x59877c[_0xe0bb9b]['iron'];}let _0x50a3e0=[];let _0x532fbd=[];let _0x5565d8=0x0,_0x5e01d9=0x0,_0x39d4b5=0x0;let _0x30fad5=0x0,_0x2fa589=0x0,_0x158d1a=0x0;for(let _0x1378b9=0x0;_0x1378b9<_0x36986d['length'];_0x1378b9++){let _0x7768e7=_0x36986d[_0x1378b9];let _0x13a41a=_0x29015f[_0x1378b9];let _0x49f7e3=0x0,_0xf61ad2=0x0,_0x1b2641=0x0;let _0x4e0610=0x0,_0x3f0873=0x0,_0x15bfc6=0x0;let _0x21cab4=0x0,_0x1e9beb=0x0,_0x509ecc=0x0;let _0x380ca7=0x0,_0x4c7808=0x0,_0x2dcc0f=0x0;let _0x4b7450=[],_0x49eb48=[];let _0x5a64a5=0x0,_0x199499=0x0,_0x1be2a6=0x0;for(let _0x2f8ce6=0x0;_0x2f8ce6<_0x7768e7['length'];_0x2f8ce6++){_0x49f7e3+=_0x7768e7[_0x2f8ce6]['wood']/_0x7768e7['length'];_0xf61ad2+=_0x7768e7[_0x2f8ce6]['stone']/_0x7768e7['length'];_0x1b2641+=_0x7768e7[_0x2f8ce6]['iron']/_0x7768e7['length'];_0x5a64a5+=_0x7768e7[_0x2f8ce6]['wood'];_0x199499+=_0x7768e7[_0x2f8ce6]['stone'];_0x1be2a6+=_0x7768e7[_0x2f8ce6]['iron'];}_0x4e0610=_0x49f7e3*_0xa2b1f5;_0x3f0873=_0xf61ad2*_0xa2b1f5;_0x15bfc6=_0x1b2641*_0xa2b1f5;for(let _0x262234=0x0;_0x262234<_0x7768e7['length'];_0x262234++){let _0x1f46b8=_0x7768e7[_0x262234]['coord'];let _0x13f259=_0x7768e7[_0x262234]['name'];let _0x57bd40=_0x7768e7[_0x262234]['id'];let _0x53bf92=_0x7768e7[_0x262234]['merchants'];_0x53bf92-=_0x179df1;let _0x432e83=_0x7768e7[_0x262234]['capacity']*0.95;let _0x47acb5=_0x53bf92*_0x231b7f;let _0x230010=_0x4e0610;let _0x1b20ec=_0x3f0873;let _0x2c5902=_0x15bfc6;if(_0x1ca80e['has'](_0x7768e7[_0x262234]['coord'])){let _0x2bc889=_0x1ca80e['get'](_0x7768e7[_0x262234]['coord']);_0x230010+=_0x2bc889['total_wood'];_0x1b20ec+=_0x2bc889['total_stone'];_0x2c5902+=_0x2bc889['total_iron'];_0x7768e7[_0x262234]['time_finished']=_0x2bc889['time_finished'];}else{_0x7768e7[_0x262234]['time_finished']=0x0;}let _0x2af636=_0x7768e7[_0x262234]['wood']-Math['round'](_0x230010);let _0x312bf3=_0x7768e7[_0x262234]['stone']-Math['round'](_0x1b20ec);let _0x43a450=_0x7768e7[_0x262234]['iron']-Math['round'](_0x2c5902);_0x2af636=_0x2af636<0x0?_0x2af636:_0x13a41a[_0x262234]['wood']-_0x2af636>0x0?_0x2af636:_0x13a41a[_0x262234]['wood'];_0x312bf3=_0x312bf3<0x0?_0x312bf3:_0x13a41a[_0x262234]['stone']-_0x312bf3>0x0?_0x312bf3:_0x13a41a[_0x262234]['stone'];_0x43a450=_0x43a450<0x0?_0x43a450:_0x13a41a[_0x262234]['iron']-_0x43a450>0x0?_0x43a450:_0x13a41a[_0x262234]['iron'];let _0x248e92=0x0;_0x248e92=_0x2af636>0x0?_0x248e92+_0x2af636:_0x248e92;_0x248e92=_0x312bf3>0x0?_0x248e92+_0x312bf3:_0x248e92;_0x248e92=_0x43a450>0x0?_0x248e92+_0x43a450:_0x248e92;let _0x57dde5=_0x47acb5<=_0x248e92?_0x47acb5/_0x248e92:0x1;let _0xfd0b4b=0x0,_0x3d9232=0x0,_0x26465b=0x0;let _0x340a37=0x0,_0x39bc7d=0x0,_0x1c50f2=0x0;_0xfd0b4b=_0x2af636>0x0?parseInt(_0x2af636*_0x57dde5):_0xfd0b4b;_0x3d9232=_0x312bf3>0x0?parseInt(_0x312bf3*_0x57dde5):_0x3d9232;_0x26465b=_0x43a450>0x0?parseInt(_0x43a450*_0x57dde5):_0x26465b;_0x340a37=_0x2af636>0x0?_0x340a37:_0x7768e7[_0x262234]['wood']+Math['abs'](_0x2af636)<_0x432e83?Math['abs'](_0x2af636):_0x432e83-_0x7768e7[_0x262234]['wood'];_0x39bc7d=_0x312bf3>0x0?_0x39bc7d:_0x7768e7[_0x262234]['stone']+Math['abs'](_0x312bf3)<_0x432e83?Math['abs'](_0x312bf3):_0x432e83-_0x7768e7[_0x262234]['stone'];_0x1c50f2=_0x43a450>0x0?_0x1c50f2:_0x7768e7[_0x262234]['iron']+Math['abs'](_0x43a450)<_0x432e83?Math['abs'](_0x43a450):_0x432e83-_0x7768e7[_0x262234]['iron'];_0x21cab4+=_0xfd0b4b;_0x1e9beb+=_0x3d9232;_0x509ecc+=_0x26465b;_0x380ca7+=_0x340a37;_0x4c7808+=_0x39bc7d;_0x2dcc0f+=_0x1c50f2;let _0x1058fa={'coord':_0x1f46b8,'id':_0x57bd40,'name':_0x13f259};let _0x3a6019={'coord':_0x1f46b8,'id':_0x57bd40,'name':_0x13f259};_0x1058fa['wood']=_0xfd0b4b>0x0?_0xfd0b4b:0x0;_0x1058fa['stone']=_0x3d9232>0x0?_0x3d9232:0x0;_0x1058fa['iron']=_0x26465b>0x0?_0x26465b:0x0;if(_0x1058fa['wood']>0x0||_0x1058fa['stone']>0x0||_0x1058fa['iron']>0x0)_0x4b7450['push'](_0x1058fa);_0x3a6019['wood']=_0x340a37>0x0?parseInt(_0x340a37):0x0;_0x3a6019['stone']=_0x39bc7d>0x0?parseInt(_0x39bc7d):0x0;_0x3a6019['iron']=_0x1c50f2>0x0?parseInt(_0x1c50f2):0x0;if(_0x3a6019['wood']>0x0||_0x3a6019['stone']>0x0||_0x3a6019['iron']>0x0)_0x49eb48['push'](_0x3a6019);}let _0x17496c=_0x380ca7>_0x21cab4?_0x21cab4/_0x380ca7:0x1;let _0x25b579=_0x4c7808>_0x1e9beb?_0x1e9beb/_0x4c7808:0x1;let _0x599650=_0x2dcc0f>_0x509ecc?_0x509ecc/_0x2dcc0f:0x1;for(let _0x54b14a=0x0;_0x54b14a<_0x49eb48['length'];_0x54b14a++){_0x49eb48[_0x54b14a]['wood']=parseInt(_0x49eb48[_0x54b14a]['wood']*_0x17496c);_0x49eb48[_0x54b14a]['stone']=parseInt(_0x49eb48[_0x54b14a]['stone']*_0x25b579);_0x49eb48[_0x54b14a]['iron']=parseInt(_0x49eb48[_0x54b14a]['iron']*_0x599650);}let _0x351540=[];for(let _0x5f3c4a=0x0;_0x5f3c4a<_0x49eb48['length'];_0x5f3c4a++){let _0x40447a=_0x49eb48[_0x5f3c4a]['coord'];let _0xe38ea0=_0x49eb48[_0x5f3c4a]['id'];let _0x2cd19d=_0x49eb48[_0x5f3c4a]['name'];let _0x1e923b=0x0;for(let _0x4c65d2=0x0;_0x4c65d2<_0x4b7450['length'];_0x4c65d2++){let _0xcddc9=_0x1a69f2(_0x49eb48[_0x5f3c4a]['coord'],_0x4b7450[_0x4c65d2]['coord']);_0x4b7450[_0x4c65d2]['distance']=_0xcddc9;_0x1e923b=_0x1e923b>_0xcddc9?_0x1e923b:_0xcddc9;}_0x4b7450['sort']((_0x4fe3fc,_0x570239)=>{return _0x4fe3fc['distance']>_0x570239['distance']?0x1:_0x4fe3fc['distance']<_0x570239['distance']?-0x1:0x0;});let _0x2653bd={'wood':0x0,'stone':0x0,'iron':0x0};for(let _0x3a9486=0x0;_0x3a9486<_0x4b7450['length'];_0x3a9486++){let _0x2de005=_0x4b7450[_0x3a9486]['coord'];let _0x491087=_0x4b7450[_0x3a9486]['id'];let _0x396cd3=_0x4b7450[_0x3a9486]['name'];let _0x46e345=_0x4b7450[_0x3a9486]['wood']>0x0?Math['min'](_0x49eb48[_0x5f3c4a]['wood'],_0x4b7450[_0x3a9486]['wood']):0x0;let _0x36f24b=_0x4b7450[_0x3a9486]['stone']>0x0?Math['min'](_0x49eb48[_0x5f3c4a]['stone'],_0x4b7450[_0x3a9486]['stone']):0x0;let _0x378062=_0x4b7450[_0x3a9486]['iron']>0x0?Math['min'](_0x49eb48[_0x5f3c4a]['iron'],_0x4b7450[_0x3a9486]['iron']):0x0;_0x2653bd['wood']+=_0x46e345;_0x2653bd['stone']+=_0x36f24b;_0x2653bd['iron']+=_0x378062;_0x49eb48[_0x5f3c4a]['wood']-=_0x46e345;_0x49eb48[_0x5f3c4a]['stone']-=_0x36f24b;_0x49eb48[_0x5f3c4a]['iron']-=_0x378062;_0x4b7450[_0x3a9486]['wood']-=_0x46e345;_0x4b7450[_0x3a9486]['stone']-=_0x36f24b;_0x4b7450[_0x3a9486]['iron']-=_0x378062;let _0x235151=_0x46e345+_0x36f24b+_0x378062;let _0x39d4c8=_0x235151%_0x231b7f;let _0x3308e4=_0x231b7f==0x3e8?0x2bc:0x4b0;if(_0x39d4c8<_0x3308e4){if(_0x46e345>_0x39d4c8){_0x46e345-=_0x39d4c8;_0x235151-=_0x39d4c8;}else if(_0x36f24b>_0x39d4c8){_0x36f24b-=_0x39d4c8;_0x235151-=_0x39d4c8;}else if(_0x378062>_0x39d4c8){_0x378062-=_0x39d4c8;_0x235151-=_0x39d4c8;}}_0x351540['push'](_0x4b7450[_0x3a9486]['distance']);if(_0x235151>=_0x3308e4)_0x50a3e0['push']({'total_send':_0x235151,'wood':_0x46e345,'stone':_0x36f24b,'iron':_0x378062,'coord_origin':_0x2de005,'name_origin':_0x396cd3,'id_destination':_0xe38ea0,'id_origin':_0x491087,'coord_destination':_0x40447a,'name_destination':_0x2cd19d,'distance':_0x4b7450[_0x3a9486]['distance']});let _0x3e30a1=_0x49eb48[_0x5f3c4a]['wood']+_0x49eb48[_0x5f3c4a]['stone']+_0x49eb48[_0x5f3c4a]['iron'];if(_0x3e30a1<_0x3308e4){break;}}}_0x5565d8+=_0x21cab4;_0x5e01d9+=_0x1e9beb;_0x39d4b5+=_0x509ecc;_0x30fad5+=_0x380ca7;_0x2fa589+=_0x4c7808;_0x158d1a+=_0x2dcc0f;let _0x4ccca5=0x0;for(let _0xfbfa8a=0x0;_0xfbfa8a<_0x351540['length'];_0xfbfa8a++){if(_0x4ccca5<_0x351540[_0xfbfa8a])_0x4ccca5=_0x351540[_0xfbfa8a];}_0x532fbd['push']({'nr_coords':_0x250f41[_0x1378b9]['data']['length'],'center':parseInt(_0x250f41[_0x1378b9]['mean'][0x0])+'|'+parseInt(_0x250f41[_0x1378b9]['mean'][0x1]),'max_distance':_0x4ccca5,'avg_wood':Math['round'](_0x49f7e3),'avg_stone':Math['round'](_0xf61ad2),'avg_iron':Math['round'](_0x1b2641),'total_wood_send':_0x21cab4,'total_stone_send':_0x1e9beb,'total_iron_send':_0x509ecc,'total_wood_get':_0x380ca7,'total_stone_get':_0x4c7808,'total_iron_get':_0x2dcc0f,'total_wood_cluster':_0x5a64a5,'total_stone_cluster':_0x199499,'total_iron_cluster':_0x1be2a6});}_0x532fbd['sort']((_0x11215a,_0x4d7de6)=>{return _0x11215a['max_distance']>_0x4d7de6['max_distance']?-0x1:_0x11215a['max_distance']<_0x4d7de6['max_distance']?0x1:0x0;});let _0x376ba2=new Map();for(let _0xcec112=0x0;_0xcec112<_0x50a3e0['length'];_0xcec112++){let _0x2f1eb5=_0x50a3e0[_0xcec112]['wood']+_0x50a3e0[_0xcec112]['stone']+_0x50a3e0[_0xcec112]['iron'];_0x2f1eb5=Math['ceil'](_0x2f1eb5/_0x231b7f);if(_0x376ba2['has'](_0x50a3e0[_0xcec112]['coord_origin'])){let _0x147865=_0x376ba2['get'](_0x50a3e0[_0xcec112]['coord_origin']);_0x376ba2['set'](_0x50a3e0[_0xcec112]['coord_origin'],_0x2f1eb5+_0x147865);}else{_0x376ba2['set'](_0x50a3e0[_0xcec112]['coord_origin'],_0x2f1eb5);}}for(let _0x2c918a=0x0;_0x2c918a<_0x59877c['length'];_0x2c918a++){let _0x1a9442=0x0;if(_0x376ba2['get'](_0x59877c[_0x2c918a]['coord']))_0x1a9442=_0x376ba2['get'](_0x59877c[_0x2c918a]['coord']);_0x59877c[_0x2c918a]['merchantAvailable']=_0x59877c[_0x2c918a]['merchants']-_0x1a9442;}let _0x1e63c2={};_0x1e63c2['avg_wood']=Math['round'](_0x41b06e);_0x1e63c2['avg_stone']=Math['round'](_0xe393b0);_0x1e63c2['avg_iron']=Math['round'](_0x43a015);_0x1e63c2['total_wood_send']=Math['round'](_0x5565d8);_0x1e63c2['total_stone_send']=Math['round'](_0x5e01d9);_0x1e63c2['total_iron_send']=Math['round'](_0x39d4b5);_0x1e63c2['total_wood_get']=Math['round'](_0x30fad5);_0x1e63c2['total_stone_get']=Math['round'](_0x2fa589);_0x1e63c2['total_iron_get']=Math['round'](_0x158d1a);_0x1e63c2['total_wood_home']=Math['round'](_0x39d2bd);_0x1e63c2['total_stone_home']=Math['round'](_0x329c16);_0x1e63c2['total_iron_home']=Math['round'](_0x539f54);for(let _0x48f905=0x0;_0x48f905<_0x59877c['length'];_0x48f905++){for(let _0x3fd794=0x0;_0x3fd794<_0x50a3e0['length'];_0x3fd794++){if(_0x59877c[_0x48f905]['coord']==_0x50a3e0[_0x3fd794]['coord_destination']){_0x59877c[_0x48f905]['wood']+=_0x50a3e0[_0x3fd794]['wood'];_0x59877c[_0x48f905]['stone']+=_0x50a3e0[_0x3fd794]['stone'];_0x59877c[_0x48f905]['iron']+=_0x50a3e0[_0x3fd794]['iron'];}else if(_0x59877c[_0x48f905]['coord']==_0x50a3e0[_0x3fd794]['coord_origin']){_0x59877c[_0x48f905]['wood']-=_0x50a3e0[_0x3fd794]['wood'];_0x59877c[_0x48f905]['stone']-=_0x50a3e0[_0x3fd794]['stone'];_0x59877c[_0x48f905]['iron']-=_0x50a3e0[_0x3fd794]['iron'];}_0x59877c[_0x48f905]['result_wood']=_0x59877c[_0x48f905]['wood']-Math['round'](_0x41b06e);_0x59877c[_0x48f905]['result_stone']=_0x59877c[_0x48f905]['stone']-Math['round'](_0xe393b0);_0x59877c[_0x48f905]['result_iron']=_0x59877c[_0x48f905]['iron']-Math['round'](_0x43a015);_0x59877c[_0x48f905]['result_total']=_0x59877c[_0x48f905]['result_wood']+_0x59877c[_0x48f905]['result_stone']+_0x59877c[_0x48f905]['result_iron'];}}_0x59877c['sort']((_0x29e2b2,_0x3e6526)=>{return _0x29e2b2['result_total']>_0x3e6526['result_total']?0x1:_0x29e2b2['result_total']<_0x3e6526['result_total']?-0x1:0x0;});let _0x42489e=new Map();for(let _0x57db4a=0x0;_0x57db4a<_0x50a3e0['length'];_0x57db4a++){let _0x1189cc=_0x50a3e0[_0x57db4a]['id_destination'];let _0x431c1b=_0x50a3e0[_0x57db4a]['id_origin'];let _0x581e8a='resource['+_0x431c1b+'][wood]';let _0x3841ac='resource['+_0x431c1b+'][stone]';let _0x186060='resource['+_0x431c1b+'][iron]';let _0x362b45={};if(_0x42489e['has'](_0x1189cc)){let _0x374b56=_0x42489e['get'](_0x1189cc);_0x374b56['send_resources'][_0x581e8a]=_0x50a3e0[_0x57db4a]['wood'];_0x374b56['send_resources'][_0x3841ac]=_0x50a3e0[_0x57db4a]['stone'];_0x374b56['send_resources'][_0x186060]=_0x50a3e0[_0x57db4a]['iron'];_0x374b56['total_send']+=_0x50a3e0[_0x57db4a]['total_send'];_0x374b56['total_wood']+=_0x50a3e0[_0x57db4a]['wood'];_0x374b56['total_stone']+=_0x50a3e0[_0x57db4a]['stone'];_0x374b56['total_iron']+=_0x50a3e0[_0x57db4a]['iron'];_0x374b56['distance']=Math['max'](_0x374b56['distance'],_0x50a3e0[_0x57db4a]['distance']);_0x42489e['set'](_0x1189cc,_0x374b56);}else{_0x362b45[_0x581e8a]=_0x50a3e0[_0x57db4a]['wood'];_0x362b45[_0x3841ac]=_0x50a3e0[_0x57db4a]['stone'];_0x362b45[_0x186060]=_0x50a3e0[_0x57db4a]['iron'];_0x42489e['set'](_0x1189cc,{'target_id':_0x1189cc,'coord_destination':_0x50a3e0[_0x57db4a]['coord_destination'],'name_destination':_0x50a3e0[_0x57db4a]['name_destination'],'send_resources':_0x362b45,'total_send':_0x50a3e0[_0x57db4a]['total_send'],'total_wood':_0x50a3e0[_0x57db4a]['wood'],'total_stone':_0x50a3e0[_0x57db4a]['stone'],'total_iron':_0x50a3e0[_0x57db4a]['iron'],'distance':_0x50a3e0[_0x57db4a]['distance']});}if(_0x389a96['has'](_0x1189cc)){let _0x3e3c3e=_0x389a96['get'](_0x1189cc);_0x3e3c3e['total_resources_get']+=_0x50a3e0[_0x57db4a]['wood']+_0x50a3e0[_0x57db4a]['stone']+_0x50a3e0[_0x57db4a]['iron'];_0x389a96['set'](_0x1189cc,_0x3e3c3e);}if(_0x389a96['has'](_0x431c1b)){let _0x4573fe=_0x389a96['get'](_0x431c1b);_0x4573fe['total_resources_send']+=_0x50a3e0[_0x57db4a]['wood']+_0x50a3e0[_0x57db4a]['stone']+_0x50a3e0[_0x57db4a]['iron'];_0x389a96['set'](_0x431c1b,_0x4573fe);}}let _0x44f973=Array['from'](_0x42489e['entries']())['map'](_0x54c70f=>_0x54c70f[0x1]);_0x44f973['sort']((_0xb0649,_0x15c6d4)=>{return _0xb0649['total_send']>_0x15c6d4['total_send']?-0x1:_0xb0649['total_send']<_0x15c6d4['total_send']?0x1:0x0;});let _0x87f86a=new Date()['getTime']();_0x4d2961();_0x39867f();$('#div_tables')['show']();_0x4087d8(_0x44f973,_0x1e63c2,_0x59877c,_0x532fbd);ScriptAPI['fa_register_equilibri']['fn02'](!void 0x0);$('#fa_register_equilibri\x20#fa_widget_stop')['prop']('disabled',![]);if(typeof TWMap!='undefined'){$('#map_container')['remove']();TWMap['mapHandler']['spawnSector']=_0x11abe9;let _0x1fb4ed=[];for(let _0x154ef8=0x0;_0x154ef8<_0x250f41['length'];_0x154ef8++){let _0x143777=0.2;let _0x44aa3d=_0x4b8eef(_0x143777);_0x1fb4ed['push'](_0x44aa3d);}_0x398f8b(_0x389a96,_0x1fb4ed);TWMap['init']();}};function _0x281e38(){return new Promise((_0x2f7353,_0x10125e)=>{let _0x5f1dc1=game_data['link_base_pure']+'overview_villages&mode=prod';let _0x33fe8c=_0x2d4a43(_0x5f1dc1);const _0x655f0f=new DOMParser();const _0x24f22e=_0x655f0f['parseFromString'](_0x33fe8c,'text/html');let _0x50dad8=[];if($(_0x24f22e)['find']('.paged-nav-item')['parent']()['find']('select')['length']>0x0){Array['from']($(_0x24f22e)['find']('.paged-nav-item')['parent']()['find']('select')['find']('option'))['forEach'](function(_0x40a9d3){_0x50dad8['push'](_0x40a9d3['value']);});_0x50dad8['pop']();}else if(_0x24f22e['getElementsByClassName']('paged-nav-item')['length']>0x0){let _0x550dd7=0x0;Array['from'](_0x24f22e['getElementsByClassName']('paged-nav-item'))['forEach'](function(_0x123d98){let _0xb0faa2=_0x123d98['href'];_0xb0faa2=_0xb0faa2['split']('page=')[0x0]+'page='+_0x550dd7;_0x550dd7++;_0x50dad8['push'](_0xb0faa2);});}else{_0x50dad8['push'](_0x5f1dc1);}_0x50dad8=_0x50dad8['reverse']();let _0x424501=[];let _0x13ee4b=new Map();function _0x5c561a(_0x2f4076){let _0x168fb7;if(_0x2f4076['length']>0x0){_0x168fb7=_0x2f4076['pop']();}else{_0x168fb7='stop';}let _0x2261eb=new Date()['getTime']();if(_0x2f4076['length']>=0x0&&_0x168fb7!='stop'){$['ajax']({'url':_0x168fb7,'method':'get','success':_0x5d1987=>{const _0x1878ba=new DOMParser();const _0x30bd21=_0x1878ba['parseFromString'](_0x5d1987,'text/html');if(game_data['device']=='desktop'){let _0x395ae4=Array['from']($(_0x30bd21)['find']('.row_a,\x20.row_b'));for(let _0xde1e13=0x0;_0xde1e13<_0x395ae4['length'];_0xde1e13++){let _0x2990b7=_0x395ae4[_0xde1e13]['getElementsByClassName']('quickedit-vn')[0x0]['innerText'];let _0x35d965=_0x395ae4[_0xde1e13]['getElementsByClassName']('quickedit-vn')[0x0]['innerText']['match'](/[0-9]{3}\|[0-9]{3}/)[0x0];let _0x460fbe=_0x395ae4[_0xde1e13]['getElementsByClassName']('quickedit-vn')[0x0]['getAttribute']('data-id');let _0x119cbe=parseInt(_0x395ae4[_0xde1e13]['getElementsByClassName']('wood')[0x0]['innerText']['replace']('.',''));let _0x99b4af=parseInt(_0x395ae4[_0xde1e13]['getElementsByClassName']('stone')[0x0]['innerText']['replace']('.',''));let _0x27e0c4=parseInt(_0x395ae4[_0xde1e13]['getElementsByClassName']('iron')[0x0]['innerText']['replace']('.',''));let _0x4be59c=parseInt(_0x395ae4[_0xde1e13]['querySelector']('a[href*=\x27market\x27]')['innerText']['split']('/')[0x0]);let _0x1eabd2=parseInt(_0x395ae4[_0xde1e13]['querySelector']('a[href*=\x27market\x27]')['innerText']['split']('/')[0x1]);let _0x18a6db=parseInt(_0x395ae4[_0xde1e13]['children'][0x4]['innerText']);let _0xe2f0d3=parseInt(_0x395ae4[_0xde1e13]['children'][0x2]['innerText']['replace']('.',''));let _0xde73cc=parseInt(_0x395ae4[_0xde1e13]['children'][0x6]['innerText']['split']('/')[0x0]);let _0x5b2683=parseInt(_0x395ae4[_0xde1e13]['children'][0x6]['innerText']['split']('/')[0x1]);let _0x54a487=_0xde73cc/_0x5b2683;let _0x56b8a8={'coord':_0x35d965,'id':_0x460fbe,'wood':_0x119cbe,'stone':_0x99b4af,'iron':_0x27e0c4,'name':_0x2990b7,'merchants':_0x4be59c,'merchants_total':_0x1eabd2,'capacity':_0x18a6db,'points':_0xe2f0d3};_0x424501['push'](_0x56b8a8);_0x13ee4b['set'](_0x35d965,_0x54a487);}}else{let _0x5b7e5f=Array['from']($(_0x30bd21)['find']('#production_table')['find']('.nowrap'));for(let _0x4935a3=0x0;_0x4935a3<_0x5b7e5f['length'];_0x4935a3++){let _0x2c6258=_0x5b7e5f[_0x4935a3]['previousElementSibling']['children'][0x0]['innerText']['trim']();let _0x1f4e34=_0x5b7e5f[_0x4935a3]['previousElementSibling']['children'][0x0]['innerText']['match'](/\d+\|\d+/)[0x0];let _0x4f92e8=_0x5b7e5f[_0x4935a3]['previousElementSibling']['getElementsByClassName']('quickedit-vn')[0x0]['getAttribute']('data-id');let _0x256a7d=parseInt(_0x5b7e5f[_0x4935a3]['getElementsByClassName']('mwood')[0x0]['innerText']['replace']('.',''));let _0x519123=parseInt(_0x5b7e5f[_0x4935a3]['getElementsByClassName']('mstone')[0x0]['innerText']['replace']('.',''));let _0x224489=parseInt(_0x5b7e5f[_0x4935a3]['getElementsByClassName']('miron')[0x0]['innerText']['replace']('.',''));let _0x2c53c4=parseInt(_0x5b7e5f[_0x4935a3]['querySelector']('a[href*=\x27market\x27]')['innerText']);let _0x282189=0x1f4;let _0x5c4b4f=parseInt(_0x5b7e5f[_0x4935a3]['getElementsByClassName']('ressources')[0x0]['parentElement']['innerText']);let _0x1d3af5=parseInt(_0x5b7e5f[_0x4935a3]['previousElementSibling']['children'][0x1]['innerText']['replace']('.',''));let _0x3bf9e7=parseInt(_0x5b7e5f[_0x4935a3]['getElementsByClassName']('population')[0x0]['parentElement']['innerText']['split']('/')[0x0]);let _0x5f4b29=parseInt(_0x5b7e5f[_0x4935a3]['getElementsByClassName']('population')[0x0]['parentElement']['innerText']['split']('/')[0x1]);let _0x2bd8d1=_0x3bf9e7/_0x5f4b29;let _0x3c450d={'coord':_0x1f4e34,'id':_0x4f92e8,'wood':_0x256a7d,'stone':_0x519123,'iron':_0x224489,'name':_0x2c6258,'merchants':_0x2c53c4,'merchants_total':_0x282189,'capacity':_0x5c4b4f,'points':_0x1d3af5};_0x424501['push'](_0x3c450d);_0x13ee4b['set'](_0x1f4e34,_0x2bd8d1);}}let _0x2e6078=new Date()['getTime']();let _0x26d054=_0x2e6078-_0x2261eb;window['setTimeout'](function(){_0x5c561a(_0x50dad8);},0xc8-_0x26d054);},'error':_0x432b5d=>{_0x10125e(_0x432b5d);}});}else{_0x2f7353({'list_production':_0x424501,'map_farm_usage':_0x13ee4b});}}_0x5c561a(_0x50dad8);});}function _0x3795ab(){return new Promise((_0x32b179,_0x1ef64e)=>{let _0x139b06=game_data['link_base_pure']+'overview_villages&mode=trader&type=inc';let _0x20f84a=_0x2d4a43(_0x139b06);const _0xa0cffe=new DOMParser();const _0x57573b=_0xa0cffe['parseFromString'](_0x20f84a,'text/html');let _0x5bcfc1=[];if($(_0x57573b)['find']('.paged-nav-item')['parent']()['find']('select')['length']>0x0){Array['from']($(_0x57573b)['find']('.paged-nav-item')['parent']()['find']('select')['find']('option'))['forEach'](function(_0x2b93a8){_0x5bcfc1['push'](_0x2b93a8['value']);});_0x5bcfc1['pop']();}else if(_0x57573b['getElementsByClassName']('paged-nav-item')['length']>0x0){let _0x540ddd=0x0;Array['from'](_0x57573b['getElementsByClassName']('paged-nav-item'))['forEach'](function(_0x4fdb7a){let _0x2b63c7=_0x4fdb7a['href'];_0x2b63c7=_0x2b63c7['split']('page=')[0x0]+'page='+_0x540ddd;_0x540ddd++;_0x5bcfc1['push'](_0x2b63c7);});}else{_0x5bcfc1['push'](_0x139b06);}_0x5bcfc1=_0x5bcfc1['reverse']();let _0x557237=new Map();function _0x2c0942(_0x3ecaa2){let _0xff5d4d;if(_0x3ecaa2['length']>0x0){_0xff5d4d=_0x3ecaa2['pop']();}else{_0xff5d4d='stop';}let _0x1a8954=new Date()['getTime']();if(_0x3ecaa2['length']>=0x0&&_0xff5d4d!='stop'){$['ajax']({'url':_0xff5d4d,'method':'get','success':_0x59f464=>{const _0x47f9d6=new DOMParser();const _0x314beb=_0x47f9d6['parseFromString'](_0x59f464,'text/html');let _0x34b7f3=Array['from']($(_0x314beb)['find']('.row_a,\x20.row_b'));for(let _0x50f1a6=0x0;_0x50f1a6<_0x34b7f3['length'];_0x50f1a6++){let _0x3c3290='';if(game_data['device']=='desktop'){_0x3c3290=_0x34b7f3[_0x50f1a6]['children'][0x4]['innerText']['match'](/[0-9]{3}\|[0-9]{3}/)[0x0];}else{_0x3c3290=_0x34b7f3[_0x50f1a6]['children'][0x3]['innerText']['match'](/[0-9]{3}\|[0-9]{3}/g)[0x1];}let _0x43a7da=parseInt($(_0x34b7f3[_0x50f1a6])['find']('.wood')['parent']()['text']()['replace']('.',''));let _0x1e7ea9=parseInt($(_0x34b7f3[_0x50f1a6])['find']('.stone')['parent']()['text']()['replace']('.',''));let _0x1a3f5=parseInt($(_0x34b7f3[_0x50f1a6])['find']('.iron')['parent']()['text']()['replace']('.',''));_0x43a7da=Number['isNaN'](_0x43a7da)==!![]?0x0:_0x43a7da;_0x1e7ea9=Number['isNaN'](_0x1e7ea9)==!![]?0x0:_0x1e7ea9;_0x1a3f5=Number['isNaN'](_0x1a3f5)==!![]?0x0:_0x1a3f5;let _0x2ae5b1={'wood':_0x43a7da,'stone':_0x1e7ea9,'iron':_0x1a3f5};if(_0x557237['has'](_0x3c3290)){let _0x1b587d=_0x557237['get'](_0x3c3290);_0x1b587d['wood']+=_0x43a7da;_0x1b587d['stone']+=_0x1e7ea9;_0x1b587d['iron']+=_0x1a3f5;_0x557237['set'](_0x3c3290,_0x1b587d);}else{_0x557237['set'](_0x3c3290,_0x2ae5b1);}}let _0x56f72a=new Date()['getTime']();let _0x49888e=_0x56f72a-_0x1a8954;window['setTimeout'](function(){_0x2c0942(_0x5bcfc1);},0xc8-_0x49888e);},'error':_0x2e8daf=>{_0x1ef64e(_0x2e8daf);}});}else{_0x32b179(_0x557237);}}_0x2c0942(_0x5bcfc1);});}function _0x2d4a43(_0x1ed61a){var _0x4c9399=new XMLHttpRequest();_0x4c9399['open']('GET',_0x1ed61a,![]);_0x4c9399['send'](null);return _0x4c9399['responseText'];}function _0x1a69f2(_0x2cbbe0,_0x2a75ec){let _0x3742c0=parseInt(_0x2cbbe0['split']('|')[0x0]);let _0x271c23=parseInt(_0x2cbbe0['split']('|')[0x1]);let _0x38d316=parseInt(_0x2a75ec['split']('|')[0x0]);let _0x45f22a=parseInt(_0x2a75ec['split']('|')[0x1]);return Math['sqrt']((_0x3742c0-_0x38d316)*(_0x3742c0-_0x38d316)+(_0x271c23-_0x45f22a)*(_0x271c23-_0x45f22a));}async function _0x4087d8(_0x50600e,_0x5b8561,_0x141e06,_0x3bfaa6){let _0x3b8918='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table\x20\x20class=\x22scriptTableAlternate\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22width:3%\x22>nr</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22width:35%\x22>target</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22#\x22\x20id=\x22sort_distance\x22><font\x20color=\x22'+_0x4afef4+'\x22>max\x20distance</font></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22#\x22\x20id=\x22sort_total\x22><font\x20color=\x22'+_0x4afef4+'\x22>total\x20send</font></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22hide_mobile\x22><a\x20href=\x22#\x22\x20id=\x22sort_wood\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/wood.png\x22/></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22hide_mobile\x22><a\x20href=\x22#\x22\x20id=\x22sort_stone\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/stone.png\x22/></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22hide_mobile\x22><a\x20href=\x22#\x22\x20id=\x22sort_iron\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/iron.png\x22/></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>send</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>';for(let _0x3765b4=0x0;_0x3765b4<_0x50600e['length'];_0x3765b4++){let _0x2376ed=_0x50600e[_0x3765b4]['target_id'];let _0x41828b=_0x50600e[_0x3765b4]['total_wood'];let _0x4f23c5=_0x50600e[_0x3765b4]['total_stone'];let _0x2824a9=_0x50600e[_0x3765b4]['total_iron'];let _0x962231=_0x50600e[_0x3765b4]['id_origin'];let _0xd1554=JSON['stringify'](_0x50600e[_0x3765b4]['send_resources']);_0x3b8918+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20id=\x22delete_row\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+(_0x3765b4+0x1)+'</td>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22'+game_data['link_base_pure']+'info_village&id='+_0x50600e[_0x3765b4]['target_id']+'\x22><font\x20color=\x22'+_0x4afef4+'\x22>'+_0x50600e[_0x3765b4]['name_destination']+'</font></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x50600e[_0x3765b4]['distance']['toFixed'](0x1)+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x50600e[_0x3765b4]['total_send'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22hide_mobile\x22>'+_0x32f283(_0x41828b)+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22hide_mobile\x22>'+_0x32f283(_0x4f23c5)+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20class=\x22hide_mobile\x22>'+_0x32f283(_0x2824a9)+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x20btn_send\x22\x20target_id=\x22'+_0x2376ed+'\x22\x20data=\x27'+_0xd1554+'\x27\x20\x20type=\x22button\x22\x20value=\x22send\x22></td>\x0a\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>';}_0x3b8918+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20</table>';document['getElementById']('table_view')['innerHTML']=_0x3b8918;if(game_data['device']!='desktop')$('.hide_mobile')['hide']();$('.btn_send')['on']('click',async _0x2ced71=>{if($(_0x2ced71['target'])['is'](':disabled')==![]){let _0x1da7bb=$(_0x2ced71['target'])['attr']('target_id');let _0x2726dc=JSON['parse']($(_0x2ced71['target'])['attr']('data'));$('.btn_send')['attr']('disabled',!![]);let _0x5cf71f=new Date()['getTime']();_0x5babff(_0x1da7bb,_0x2726dc);let _0x429065=new Date()['getTime']();let _0x4b0a3c=_0x429065-_0x5cf71f;window['setTimeout'](()=>{$(_0x2ced71['target'])['closest']('#delete_row')['remove']();$('.btn_send')['attr']('disabled',![]);},0xc8-_0x4b0a3c);}});let _0x222f36='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_stats\x22\x20class=\x22scriptTable\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20id=\x22btn_result\x22\x20type=\x22button\x22\x20value=\x22results\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><input\x20class=\x22btn\x20evt-confirm-btn\x20btn-confirm-yes\x22\x20id=\x22btn_cluster\x22\x20type=\x22button\x22\x20value=\x22clusters\x22></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/wood.png\x22/></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/stone.png\x22/></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/iron.png\x22/></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22>total</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['total_wood_home'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['total_stone_home'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['total_iron_home'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22>average</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['avg_wood'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['avg_stone'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['avg_iron'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22>surplus</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['total_wood_send'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['total_stone_send'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['total_iron_send'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22>deficit</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['total_wood_get'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['total_stone_get'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5b8561['total_iron_get'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x0a\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20';document['getElementById']('table_stats')['innerHTML']=_0x222f36;$('#btn_result')['on']('click',()=>{_0x552bd2(_0x141e06);});$('#btn_cluster')['on']('click',()=>{_0x246ec5(_0x3bfaa6);});document['getElementById']('sort_distance')['addEventListener']('click',()=>{_0x50600e['sort']((_0x4b3913,_0x2f3274)=>{return parseFloat(_0x4b3913['distance'])>parseFloat(_0x2f3274['distance'])?0x1:parseFloat(_0x4b3913['distance'])<parseFloat(_0x2f3274['distance'])?-0x1:0x0;});document['getElementById']('table_stats')['innerHTML']='';_0x4087d8(_0x50600e,_0x5b8561,_0x141e06,_0x3bfaa6);});document['getElementById']('sort_total')['addEventListener']('click',()=>{_0x50600e['sort']((_0x15988e,_0x6cb5f1)=>{return _0x15988e['total_send']>_0x6cb5f1['total_send']?-0x1:_0x15988e['total_send']<_0x6cb5f1['total_send']?0x1:0x0;});document['getElementById']('table_view')['innerHTML']='';_0x4087d8(_0x50600e,_0x5b8561,_0x141e06,_0x3bfaa6);});document['getElementById']('sort_wood')['addEventListener']('click',()=>{_0x50600e['sort']((_0x5d06db,_0x4653da)=>{return _0x5d06db['total_wood']>_0x4653da['total_wood']?-0x1:_0x5d06db['total_wood']<_0x4653da['total_wood']?0x1:0x0;});document['getElementById']('table_view')['innerHTML']='';_0x4087d8(_0x50600e,_0x5b8561,_0x141e06,_0x3bfaa6);});document['getElementById']('sort_stone')['addEventListener']('click',()=>{_0x50600e['sort']((_0x10074c,_0x3b9670)=>{return _0x10074c['total_stone']>_0x3b9670['total_stone']?-0x1:_0x10074c['total_stone']<_0x3b9670['total_stone']?0x1:0x0;});document['getElementById']('table_view')['innerHTML']='';_0x4087d8(_0x50600e,_0x5b8561,_0x141e06,_0x3bfaa6);});document['getElementById']('sort_iron')['addEventListener']('click',()=>{_0x50600e['sort']((_0x44d3d7,_0x3bef8e)=>{return _0x44d3d7['total_iron']>_0x3bef8e['total_iron']?-0x1:_0x44d3d7['total_iron']<_0x3bef8e['total_iron']?0x1:0x0;});document['getElementById']('table_view')['innerHTML']='';_0x4087d8(_0x50600e,_0x5b8561,_0x141e06,_0x3bfaa6);});if(document['getElementsByClassName']('btn_send')['length']>0x0){document['getElementsByClassName']('btn_send')[0x0]['focus']();}window['onkeydown']=function(_0xceff2){if(_0xceff2['which']==0xd){if(document['getElementsByClassName']('btn_send')['length']>0x0){document['getElementsByClassName']('btn_send')[0x0]['click']();}}};}function _0x32f283(_0x2add5c){return new Intl['NumberFormat']()['format'](_0x2add5c);}function _0x552bd2(_0x5c5b40){let _0x5cbc09='\x0a\x20\x20\x20\x20<center><div\x20id=\x22table_results\x22\x20style=\x22height:800px;width:800px;overflow:auto\x22>\x0a\x20\x20\x20\x20<table\x20id=\x22table_stats\x22\x20\x20class=\x22scriptTableBalancerResult\x22>\x0a\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td>coord</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20><a\x20href=\x22#\x22\x20id=\x22order_points\x22><font\x20\x20color=\x22'+_0x4afef4+'\x22>points</font></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22width:10%\x22><a\x20href=\x22#\x22\x20id=\x22order_merchants\x22><font\x20\x20color=\x22'+_0x4afef4+'\x22>merchants</font></a></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/main.png\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22#\x22\x20id=\x22order_hours\x22><font\x20\x20color=\x22'+_0x4afef4+'\x22>[hours]</font></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22#\x22\x20class=\x22order_deficit\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/wood.png\x22/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22#\x22\x20class=\x22order_deficit\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/stone.png\x22/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x222\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22#\x22\x20class=\x22order_deficit\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/iron.png\x22/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22#\x22\x20class=\x22order_wh\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center\x20style=\x22margin:10px\x22><img\x20src=\x22https://dsen.innogamescdn.com/asset/04d88c84/graphic/buildings/storage.png\x22/></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x0a\x20\x20\x20\x20</tr>';for(let _0x59a581=0x0;_0x59a581<_0x5c5b40['length'];_0x59a581++){let _0x37893f='#013e27',_0x1e73ba='#026440';let _0x15ccdb='#5f0000',_0x36a299='#9a0000';if(_0x59a581%0x2!=0x0){header_status_wood=parseInt(_0x5c5b40[_0x59a581]['result_wood'])>=0x0?_0x37893f:_0x15ccdb;header_status_stone=parseInt(_0x5c5b40[_0x59a581]['result_stone'])>=0x0?_0x37893f:_0x15ccdb;header_status_iron=parseInt(_0x5c5b40[_0x59a581]['result_iron'])>=0x0?_0x37893f:_0x15ccdb;}else{header_status_wood=parseInt(_0x5c5b40[_0x59a581]['result_wood'])>=0x0?_0x1e73ba:_0x36a299;header_status_stone=parseInt(_0x5c5b40[_0x59a581]['result_stone'])>=0x0?_0x1e73ba:_0x36a299;header_status_iron=parseInt(_0x5c5b40[_0x59a581]['result_iron'])>=0x0?_0x1e73ba:_0x36a299;}_0x5cbc09+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><a\x20href=\x22'+game_data['link_base_pure']+'info_village&id='+_0x5c5b40[_0x59a581]['id']+'\x22><font\x20color=\x22'+_0x4afef4+'\x22>'+_0x5c5b40[_0x59a581]['coord']+'</font></a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5c5b40[_0x59a581]['points'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><b>'+_0x5c5b40[_0x59a581]['merchantAvailable']+'</b>\x20/\x20'+_0x5c5b40[_0x59a581]['merchants_total']+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(parseInt(_0x5c5b40[_0x59a581]['time_finished']*0xa)/0xa)+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5c5b40[_0x59a581]['wood'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22background-color:'+header_status_wood+'\x22>'+_0x32f283(_0x5c5b40[_0x59a581]['result_wood'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5c5b40[_0x59a581]['stone'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22background-color:'+header_status_stone+'\x22>'+_0x32f283(_0x5c5b40[_0x59a581]['result_stone'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5c5b40[_0x59a581]['iron'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22background-color:'+header_status_iron+'\x22>'+_0x32f283(_0x5c5b40[_0x59a581]['result_iron'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x5c5b40[_0x59a581]['capacity'])+'</td>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';}_0x5cbc09+='\x0a\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20</div></center>\x0a\x20\x20\x20\x20';Dialog['show']('content',_0x5cbc09);$('#order_points')['on']('click',()=>{_0x5c5b40['sort']((_0x47d967,_0x151e84)=>{return _0x47d967['points']>_0x151e84['points']?0x1:_0x47d967['points']<_0x151e84['points']?-0x1:0x0;});$('.popup_box_close')['click']();_0x552bd2(_0x5c5b40);});$('#order_merchants')['on']('click',()=>{_0x5c5b40['sort']((_0x467de7,_0x673dbc)=>{return _0x467de7['merchantAvailable']>_0x673dbc['merchantAvailable']?0x1:_0x467de7['merchantAvailable']<_0x673dbc['merchantAvailable']?-0x1:0x0;});$('.popup_box_close')['click']();_0x552bd2(_0x5c5b40);});$('#order_hours')['on']('click',()=>{_0x5c5b40['sort']((_0x5d581f,_0xf6a4ed)=>{return _0x5d581f['time_finished']>_0xf6a4ed['time_finished']?-0x1:_0x5d581f['time_finished']<_0xf6a4ed['time_finished']?0x1:0x0;});$('.popup_box_close')['click']();_0x552bd2(_0x5c5b40);});$('.order_deficit')['on']('click',()=>{_0x5c5b40['sort']((_0x4159c2,_0x172155)=>{return _0x4159c2['result_total']>_0x172155['result_total']?0x1:_0x4159c2['result_total']<_0x172155['result_total']?-0x1:0x0;});$('.popup_box_close')['click']();_0x552bd2(_0x5c5b40);});$('#order_wh')['on']('click',()=>{_0x5c5b40['sort']((_0x573b9d,_0x2c0386)=>{return _0x573b9d['capacity']>_0x2c0386['capacity']?0x1:_0x573b9d['capacity']<_0x2c0386['capacity']?-0x1:0x0;});$('.popup_box_close')['click']();_0x552bd2(_0x5c5b40);});}function _0x246ec5(_0x1d7b72){let _0x470e2a='\x0a\x20\x20\x20\x20<center><div\x20id=\x22table_results\x22\x20style=\x22height:800px;width:700px;overflow:auto\x22>\x0a\x20\x20\x20\x20<table\x20id=\x22table_stats\x22\x20class=\x22scriptTable\x22>\x0a\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22width:5%\x22>nr</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>coords/\x0acluster</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>center\x20of\x20cluster</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20style=\x22width:50%\x22>resources</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>max\x20distance</td>\x20\x20\x20\x0a\x20\x20\x20\x20</tr>';for(let _0x28e6ab=0x0;_0x28e6ab<_0x1d7b72['length'];_0x28e6ab++){let _0x1a53af='#202825',_0x49daf1='#313e39';let _0x144caf=_0x28e6ab%0x2==0x0?_0x1a53af:_0x49daf1;_0x470e2a+='\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+(_0x28e6ab+0x1)+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['nr_coords'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x1d7b72[_0x28e6ab]['center']+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<table\x20id=\x22table_stats\x22\x20class=\x22scriptTableInner\x22\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>type</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/wood.png\x22/></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/stone.png\x22/></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td><img\x20src=\x22https://dsen.innogamescdn.com/asset/c2e59f13/graphic/buildings/iron.png\x22/></td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>total</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['total_wood_cluster'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['total_stone_cluster'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['total_iron_cluster'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>average</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['avg_wood'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['avg_stone'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['avg_iron'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>surplus</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['total_wood_send'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['total_stone_send'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['total_iron_send'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>deficit</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['total_wood_get'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['total_stone_get'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x32f283(_0x1d7b72[_0x28e6ab]['total_iron_get'])+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td>'+_0x1d7b72[_0x28e6ab]['max_distance']['toFixed'](0x1)+'</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20';}_0x470e2a+='\x0a\x20\x20\x20\x20</table>\x0a\x20\x20\x20\x20</div></center>\x0a\x20\x20\x20\x20';Dialog['show']('content',_0x470e2a);}function _0x5babff(_0x2da477,_0x347498){let _0x3cb760={'village':_0x2da477,'ajaxaction':'call','h':window['csrf_token']};TribalWars['post']('market',_0x3cb760,_0x347498,function(_0x1c5725){},function(_0x3359a5){});}async function _0x28671d(_0x13a135,_0x3a874a){let {map_construction_templates:_0xc6036d,map_coord_templates:_0x1fdee8}=await _0x517f88()['catch'](_0x419a91=>alert(_0x419a91));let _0x48438b=await _0x47710e()['catch'](_0x2a9350=>alert(_0x2a9350));let _0x188578=_0x3b3809();return new Promise((_0x5697a7,_0x25e95b)=>{if(_0x13a135==0x0)_0x5697a7(new Map());let _0x2c2d05=new Map();Array['from'](_0x48438b['keys']())['forEach'](_0x2c80d1=>{if(_0x2c80d1['includes']('_time_queued')){_0x2c2d05['set'](_0x2c80d1['replace']('_time_queued',''),{'total_wood':0x0,'total_stone':0x0,'total_iron':0x0,'time_finished':Math['round'](_0x48438b['get'](_0x2c80d1)/0xe10)});}});Array['from'](_0x1fdee8['keys']())['forEach'](_0x20cfdc=>{let _0x11c9ef=_0x20cfdc;let _0x22d5aa=_0x48438b['get'](_0x11c9ef+'_time_queued');let _0x20320d=_0x1fdee8['get'](_0x11c9ef);let _0x56c7b7=_0xc6036d['get'](_0x20320d);if(_0x48438b['get'](_0x11c9ef+'_farm')<0x1e&&_0x3a874a['get'](_0x11c9ef)>=0.99){let _0x156c0c=_0x48438b['get'](_0x11c9ef+'_main');let _0x2e9d31=_0x48438b['get'](_0x11c9ef+'_farm');let _0x362774=_0x188578['get']('farm');let _0x22b94e=_0xe8c3f0(_0x156c0c,_0x2e9d31,_0x362774);let _0xa4a026=_0x22b94e[0x0];let _0x1c74b0=_0x22b94e[0x1];let _0x3263f6=_0x22b94e[0x2];let _0x252399=_0x22b94e[0x3];_0x22d5aa+=_0xa4a026;_0x2c2d05['set'](_0x11c9ef,{'total_wood':_0x1c74b0,'total_stone':_0x3263f6,'total_iron':_0x252399,'time_finished':_0x22d5aa/0xe10});}for(let _0x537995=0x0;_0x537995<_0x56c7b7['length'];_0x537995++){let _0x42b79b=_0x56c7b7[_0x537995]['name'];let _0x25aa2e=_0x11c9ef+'_'+_0x42b79b;let _0x1f48a6=_0x56c7b7[_0x537995]['level_absolute'];let _0x38871d=_0x48438b['get'](_0x25aa2e);if(_0x1f48a6>_0x38871d){let _0x5ed957=_0x1f48a6-_0x38871d;for(let _0x34e979=0x0;_0x34e979<_0x5ed957;_0x34e979++){_0x38871d++;let _0x14587e=_0x48438b['get'](_0x11c9ef+'_main');let _0x5e38e4=_0x188578['get'](_0x42b79b);let _0x2b7ee7=_0xe8c3f0(_0x14587e,_0x38871d,_0x5e38e4);let _0xc72f14=_0x2b7ee7[0x0];let _0x3e89ef=_0x2b7ee7[0x1];let _0x53a01c=_0x2b7ee7[0x2];let _0x1c5162=_0x2b7ee7[0x3];_0x22d5aa+=_0xc72f14;if(_0x2c2d05['has'](_0x11c9ef)){let _0x4dfa9c=_0x2c2d05['get'](_0x11c9ef);_0x4dfa9c['total_wood']+=_0x3e89ef;_0x4dfa9c['total_stone']+=_0x53a01c;_0x4dfa9c['total_iron']+=_0x1c5162;_0x4dfa9c['time_finished']=_0x22d5aa/0xe10;_0x2c2d05['set'](_0x11c9ef,_0x4dfa9c);}else{_0x2c2d05['set'](_0x11c9ef,{'total_wood':_0x3e89ef,'total_stone':_0x53a01c,'total_iron':_0x1c5162,'time_finished':_0x22d5aa/0xe10});}_0x48438b['set'](_0x25aa2e,_0x38871d);if(_0x22d5aa>_0x13a135){break;}}}if(_0x22d5aa>_0x13a135){break;}}});_0x5697a7(_0x2c2d05);});}function _0x517f88(){return new Promise((_0x58291a,_0x1ca2c9)=>{if(game_data['features']['AccountManager']['active']==![]){_0x58291a({'map_coord_templates':new Map(),'map_construction_templates':new Map()});}let _0x5b3884=game_data['link_base_pure']+'am_village';let _0x2f06c9=_0x2d4a43(_0x5b3884);const _0x423542=new DOMParser();const _0x417106=_0x423542['parseFromString'](_0x2f06c9,'text/html');let _0x39508b=[];if($(_0x417106)['find']('#village_table')['prev']()['find']('select')['length']>0x0){Array['from']($(_0x417106)['find']('#village_table')['prev']()['find']('select')['get'](0x0))['forEach'](function(_0x183850){_0x39508b['push'](_0x183850['value']);});}else if($(_0x417106)['find']('#village_table')['prev']()['find']('.paged-nav-item')['length']>0x0){let _0xd05014=$(_0x417106)['find']('#village_table')['prev']()['find']('.paged-nav-item')['length'];for(let _0x573736=_0xd05014-0x2;_0x573736>=0x0;_0x573736--){let _0x34d432=game_data['link_base_pure']+('am_village&page='+_0x573736);_0x39508b['push'](_0x34d432);}}else{_0x39508b['push'](_0x5b3884);}_0x39508b=_0x39508b['reverse']();let _0xf5e54b=new Map();let _0x371da5=new Map();async function _0x3f812a(_0x20a3ec){let _0x1b66ac;if(_0x20a3ec['length']>0x0){_0x1b66ac=_0x20a3ec['pop']();}else{_0x1b66ac='stop';}let _0x3c546d=new Date()['getTime']();if(_0x20a3ec['length']>=0x0&&_0x1b66ac!='stop'){$['ajax']({'url':_0x1b66ac,'method':'get','success':_0x7c9bcf=>{const _0x291960=new DOMParser();const _0x31fabc=_0x291960['parseFromString'](_0x7c9bcf,'text/html');let _0x21dbc7=Array['from']($(_0x31fabc)['find']('.row_a,\x20.row_b'));for(let _0x1a5c24=0x0;_0x1a5c24<_0x21dbc7['length'];_0x1a5c24++){let _0x4c8ace=_0x21dbc7[_0x1a5c24]['children'][0x0]['innerText']['match'](/[0-9]{3}\|[0-9]{3}/)[0x0];let _0x2fb613=_0x21dbc7[_0x1a5c24]['children'][0x1]['innerText']['trim']();if(_0x2fb613!=''){_0xf5e54b['set'](_0x4c8ace,_0x2fb613);_0x371da5['set'](_0x2fb613,0x0);}}let _0x301b45=new Date()['getTime']();let _0x7213a9=_0x301b45-_0x3c546d;window['setTimeout'](function(){_0x3f812a(_0x39508b);},0xc8-_0x7213a9);},'error':_0x9e77b7=>{_0x1ca2c9(_0x9e77b7);}});}else{let _0x249c26=Array['from']($(_0x417106)['find']('select[name=template]')['eq'](0x0)['find']('option'));for(let _0x380ee7=0x0;_0x380ee7<_0x249c26['length'];_0x380ee7++){let _0x25f59c=game_data['link_base_pure']+('am_village&mode=queue&template='+_0x249c26[_0x380ee7]['value']);let _0x1cdae9;if(_0x380ee7<0x3)_0x1cdae9=_0x249c26[_0x380ee7]['innerText']['replaceAll']('\x0a','')['replaceAll']('\x09','')['replace'](/\(\w+\)/,'');else _0x1cdae9=_0x249c26[_0x380ee7]['innerText']['replaceAll']('\x0a','')['replaceAll']('\x09','');if(_0x371da5['has'](_0x1cdae9)){let _0x59bcd3=await _0x56b7f8(_0x25f59c);const _0x52f6a4=new DOMParser();const _0x2e8047=_0x52f6a4['parseFromString'](_0x59bcd3,'text/html');let _0x28ea47=[];Array['from']($(_0x2e8047)['find']('.sortable_row'))['forEach'](_0x1e955c=>{_0x28ea47['push']({'name':_0x1e955c['getAttribute']('data-building'),'level_relative':parseInt($(_0x1e955c)['find']('.level_relative')['text']()),'level_absolute':parseInt($(_0x1e955c)['find']('.level_absolute')['text']()['match'](/\d+/)[0x0])});});_0x371da5['set'](_0x1cdae9,_0x28ea47);}}_0x58291a({'map_coord_templates':_0xf5e54b,'map_construction_templates':_0x371da5});}}_0x3f812a(_0x39508b);});}function _0x56b7f8(_0x2a9000){return new Promise((_0x2b5d6a,_0x22d6fe)=>{let _0x2cf677=new Date()['getTime']();$['ajax']({'url':_0x2a9000,'method':'get','success':_0x93c3cc=>{let _0xe41b82=new Date()['getTime']();let _0x5748c6=_0xe41b82-_0x2cf677;window['setTimeout'](()=>{_0x2b5d6a(_0x93c3cc);},0xc8-_0x5748c6);},'error':_0x3e24ab=>{_0x22d6fe(_0x3e24ab);}});});}function _0x47710e(){return new Promise((_0x467223,_0xa202a)=>{let _0xc8278d=game_data['link_base_pure']+'overview_villages&mode=buildings';let _0x4b09f2=_0x2d4a43(_0xc8278d);const _0x259fbe=new DOMParser();const _0x2e85f4=_0x259fbe['parseFromString'](_0x4b09f2,'text/html');let _0x3fe1c9=[];if($(_0x2e85f4)['find']('.paged-nav-item')['parent']()['find']('select')['length']>0x0){Array['from']($(_0x2e85f4)['find']('.paged-nav-item')['parent']()['find']('select')['find']('option'))['forEach'](function(_0x5bdffa){_0x3fe1c9['push'](_0x5bdffa['value']);});_0x3fe1c9['pop']();}else if(_0x2e85f4['getElementsByClassName']('paged-nav-item')['length']>0x0){let _0x245e12=0x0;Array['from'](_0x2e85f4['getElementsByClassName']('paged-nav-item'))['forEach'](function(_0x1c8cdf){let _0x4dfdac=_0x1c8cdf['href'];_0x4dfdac=_0x4dfdac['split']('page=')[0x0]+'page='+_0x245e12;_0x245e12++;_0x3fe1c9['push'](_0x4dfdac);});}else{_0x3fe1c9['push'](_0xc8278d);}_0x3fe1c9=_0x3fe1c9;let _0x4319fa=new Map();function _0x5bfe05(_0x10a5df){let _0x123e3c;if(_0x10a5df['length']>0x0){_0x123e3c=_0x10a5df['pop']();}else{_0x123e3c='stop';}let _0x5c298d=new Date()['getTime']();if(_0x10a5df['length']>=0x0&&_0x123e3c!='stop'){$['ajax']({'url':_0x123e3c,'method':'get','success':_0x5cc7af=>{const _0xb82c37=new DOMParser();const _0x4fbd6d=_0xb82c37['parseFromString'](_0x5cc7af,'text/html');if(game_data['device']=='desktop'){let _0x40b99d=Array['from']($(_0x4fbd6d)['find']('.row_a,\x20.row_b'));for(let _0x31e24c=0x0;_0x31e24c<_0x40b99d['length'];_0x31e24c++){let _0x3ec8e3=$(_0x40b99d[_0x31e24c])['find']('.nowrap')['text']()['match'](/[0-9]{3}\|[0-9]{3}/)[0x0];let _0x275075=$(_0x40b99d[_0x31e24c])['find']('.queue_icon\x20img')['last']()['attr']('title');if(_0x275075==undefined){_0x275075=0x0;}else{_0x275075=_0x275075['split']('-')[0x1];_0x275075=_0x13eba1(_0x275075);}_0x4319fa['set'](_0x3ec8e3+'_time_queued',_0x275075);let _0x33fa27=$(_0x40b99d[_0x31e24c])['find']('.upgrade_building');for(let _0x221b20=0x0;_0x221b20<_0x33fa27['length'];_0x221b20++){let _0x34f355=_0x33fa27[_0x221b20]['classList'][0x1]['replace']('b_','');let _0x2765a6=parseInt(_0x33fa27[_0x221b20]['innerText']);let _0x3890e7=_0x3ec8e3+'_'+_0x34f355;_0x4319fa['set'](_0x3890e7,_0x2765a6);}let _0x294dd0=Array['from']($(_0x40b99d[_0x31e24c])['find']('.queue_icon\x20img'))['map'](_0x5f1af2=>_0x5f1af2['src']['match'](/\w+.png/)[0x0]['replace']('.png',''));for(let _0x4e5317=0x0;_0x4e5317<_0x294dd0['length'];_0x4e5317++){let _0x288cc7=_0x3ec8e3+'_'+_0x294dd0[_0x4e5317];if(_0x4319fa['has'](_0x288cc7)){let _0x13261e=_0x4319fa['get'](_0x288cc7);_0x4319fa['set'](_0x288cc7,_0x13261e+0x1);}else{_0x4319fa['set'](_0x288cc7,0x1);}}}}else{let _0x46194d=Array['from']($(_0x4fbd6d)['find']('.row_a,\x20.row_b'));for(let _0x3ad2d9=0x0;_0x3ad2d9<_0x46194d['length'];_0x3ad2d9++){let _0x15d3ae=$(_0x46194d[_0x3ad2d9])['find']('.nowrap')['text']()['match'](/[0-9]{3}\|[0-9]{3}/)[0x0];let _0x228ac5=$(_0x46194d[_0x3ad2d9]['nextElementSibling']['nextElementSibling'])['find']('img')['last']()['attr']('title');if(_0x228ac5==undefined){_0x228ac5=0x0;}else{_0x228ac5=_0x228ac5['split']('-')[0x1];_0x228ac5=_0x13eba1(_0x228ac5);}_0x4319fa['set'](_0x15d3ae+'_time_queued',_0x228ac5);let _0x2d6345=$(_0x46194d[_0x3ad2d9]['nextElementSibling'])['find']('table')['find']('td');let _0x435ab1=$(_0x46194d[_0x3ad2d9]['nextElementSibling'])['find']('table')['find']('th');for(let _0x3b41b2=0x0;_0x3b41b2<_0x2d6345['length'];_0x3b41b2++){let _0x364326=_0x435ab1[_0x3b41b2]['getElementsByTagName']('img')[0x0]['src']['split']('buildings/')[0x1]['replace']('.png','');let _0x2455d2=parseInt(_0x2d6345[_0x3b41b2]['innerText']);let _0x2c1975=_0x15d3ae+'_'+_0x364326;_0x4319fa['set'](_0x2c1975,_0x2455d2);}let _0x4155bd=Array['from']($(_0x46194d[_0x3ad2d9]['nextElementSibling']['nextElementSibling'])['find']('img'))['map'](_0x1eb1cd=>_0x1eb1cd['src']['match'](/\w+.png/)[0x0]['replace']('.png',''));for(let _0x2865e7=0x0;_0x2865e7<_0x4155bd['length'];_0x2865e7++){let _0x50caea=_0x15d3ae+'_'+_0x4155bd[_0x2865e7];if(_0x4319fa['has'](_0x50caea)){let _0x8d6c52=_0x4319fa['get'](_0x50caea);_0x4319fa['set'](_0x50caea,_0x8d6c52+0x1);}else{_0x4319fa['set'](_0x50caea,0x1);}}}}let _0x3541f4=new Date()['getTime']();let _0xdc06d9=_0x3541f4-_0x5c298d;window['setTimeout'](function(){_0x5bfe05(_0x3fe1c9);},0xc8-_0xdc06d9);},'error':_0x4a3745=>{_0xa202a(_0x4a3745);}});}else{_0x467223(_0x4319fa);}}_0x5bfe05(_0x3fe1c9);});}function _0x13eba1(_0x11e7ba){var _0x5ab1a6='';let _0x41ed47=document['getElementById']('serverDate')['innerText']['split']('/');if(_0x11e7ba['includes'](lang['aea2b0aa9ae1534226518faaefffdaad']['replace']('\x20%s',''))){_0x5ab1a6=_0x41ed47[0x1]+'/'+_0x41ed47[0x0]+'/'+_0x41ed47[0x2]+'\x20'+_0x11e7ba['match'](/\d+:\d+/)[0x0];}else if(_0x11e7ba['includes'](lang['57d28d1b211fddbb7a499ead5bf23079']['replace']('\x20%s',''))){var _0x413c68=new Date(_0x41ed47[0x1]+'/'+_0x41ed47[0x0]+'/'+_0x41ed47[0x2]);_0x413c68['setDate'](_0x413c68['getDate']()+0x1);_0x5ab1a6=('0'+(_0x413c68['getMonth']()+0x1))['slice'](-0x2)+'/'+('0'+_0x413c68['getDate']())['slice'](-0x2)+'/'+_0x413c68['getFullYear']()+'\x20'+_0x11e7ba['match'](/\d+:\d+/)[0x0];}else if(_0x11e7ba['includes'](lang['0cb274c906d622fa8ce524bcfbb7552d']['split']('\x20')[0x0])){var _0x1c765d=_0x11e7ba['match'](/\d+.\d+/)[0x0]['split']('.');_0x5ab1a6=_0x1c765d[0x1]+'/'+_0x1c765d[0x0]+'/'+_0x41ed47[0x2]+'\x20'+_0x11e7ba['match'](/\d+:\d+/)[0x0];}_0x5ab1a6=new Date(_0x5ab1a6);let _0x228b8c=document['getElementById']('serverTime')['innerText'];let _0x176d1c=document['getElementById']('serverDate')['innerText']['split']('/');_0x176d1c=_0x176d1c[0x1]+'/'+_0x176d1c[0x0]+'/'+_0x176d1c[0x2];let _0xc622dd=new Date(_0x176d1c+'\x20'+_0x228b8c);let _0x17368d=parseInt((_0x5ab1a6['getTime']()-_0xc622dd['getTime']())/0x3e8);if(_0x17368d<0x0){_0x5ab1a6['setDate'](_0x5ab1a6['getDate']()+0x1);_0x17368d=parseInt((_0x5ab1a6['getTime']()-_0xc622dd['getTime']())/0x3e8);}return _0x17368d;}function _0x3b3809(){if(localStorage['getItem'](game_data['world']+'constantBuildings')!==null){let _0x39f3bf=new Map(JSON['parse'](localStorage['getItem'](game_data['world']+'constantBuildings')));return _0x39f3bf;}else{let _0x3ff198=_0x2d4a43('/interface.php?func=get_building_info');const _0x5d4dc0=new DOMParser();const _0x4bc0cf=_0x5d4dc0['parseFromString'](_0x3ff198,'text/html');let _0x5075dc=new Map();let _0x5dc1dd=_0x4bc0cf['getElementsByTagName']('config')[0x0]['children'];for(let _0x4a8938=0x0;_0x4a8938<_0x5dc1dd['length'];_0x4a8938++){let _0x157482=_0x5dc1dd[_0x4a8938]['tagName']['toLowerCase']();let _0x2eb5ce=Number(_0x5dc1dd[_0x4a8938]['getElementsByTagName']('wood')[0x0]['innerText']);let _0x15a09d=Number(_0x5dc1dd[_0x4a8938]['getElementsByTagName']('stone')[0x0]['innerText']);let _0x8c143f=Number(_0x5dc1dd[_0x4a8938]['getElementsByTagName']('iron')[0x0]['innerText']);let _0x452fd8=Number(_0x5dc1dd[_0x4a8938]['getElementsByTagName']('wood_factor')[0x0]['innerText']);let _0xb40f3d=Number(_0x5dc1dd[_0x4a8938]['getElementsByTagName']('stone_factor')[0x0]['innerText']);let _0x8e25c9=Number(_0x5dc1dd[_0x4a8938]['getElementsByTagName']('iron_factor')[0x0]['innerText']);let _0x57c140=Number(_0x5dc1dd[_0x4a8938]['getElementsByTagName']('build_time')[0x0]['innerText']);let _0x26a14f=Number(_0x5dc1dd[_0x4a8938]['getElementsByTagName']('build_time_factor')[0x0]['innerText']);_0x5075dc['set'](_0x157482,{'wood':_0x2eb5ce,'stone':_0x15a09d,'iron':_0x8c143f,'wood_factor':_0x452fd8,'stone_factor':_0xb40f3d,'iron_factor':_0x8e25c9,'build_time':_0x57c140,'build_time_factor':_0x26a14f});}let _0x550107=JSON['stringify'](Array['from'](_0x5075dc['entries']()));localStorage['setItem'](game_data['world']+'constantBuildings',_0x550107);return _0x5075dc;}}function _0xe8c3f0(_0x312d07,_0x1f4cc8,_0x3b1f6f){let _0x4dbce3={0x1:0x1,0x2:0x1,0x3:0.112292,0x4:0.289555,0x5:0.46113,0x6:0.606372,0x7:0.723059,0x8:0.815935,0x9:0.889947,0xa:0.948408,0xb:0.994718,0xc:1.031,0xd:1.059231,0xe:1.080939,0xf:1.09729,0x10:1.109156,0x11:1.117308,0x12:1.122392,0x13:1.124817,0x14:1.124917,0x15:1.123181,0x16:1.119778,0x17:1.114984,0x18:1.109038,0x19:1.102077,0x1a:1.0942,0x1b:1.085601,0x1c:1.076369,0x1d:1.066566,0x1e:1.056291};var _0x56c9ff=_0x3b1f6f['build_time']*Math['pow'](1.2,_0x1f4cc8-0x1)*Math['pow'](1.05,-_0x312d07)*_0x4dbce3[_0x1f4cc8];let _0x42005c=Math['round'](_0x3b1f6f['wood']*Math['pow'](_0x3b1f6f['wood_factor'],_0x1f4cc8-0x1));let _0x5ddcf8=Math['round'](_0x3b1f6f['stone']*Math['pow'](_0x3b1f6f['stone_factor'],_0x1f4cc8-0x1));let _0x3f05b7=Math['round'](_0x3b1f6f['iron']*Math['pow'](_0x3b1f6f['iron_factor'],_0x1f4cc8-0x1));return[Math['round'](_0x56c9ff),_0x42005c,_0x5ddcf8,_0x3f05b7];}function _0x141e11(_0x27b43c,_0x12d9a3){let _0x1172b7=[];let _0xbeaa1e=0xf423f;let _0x2ea638=0x32;for(let _0x22ddbb=0x0;_0x22ddbb<_0x2ea638;_0x22ddbb++){let _0x535229=_0x21c7b1(_0x27b43c,_0x12d9a3);if(_0xbeaa1e>_0x535229['maxDistance']){_0xbeaa1e=_0x535229['maxDistance'];_0x1172b7=_0x535229;}}return _0x1172b7;}function _0x21c7b1(_0x292d09,_0x2c1826){var _0x2beea0,_0x2752ba,_0x93d148,_0x4469ba,_0x49b383;if(!_0x2c1826||!_0x2c1826['numberOfClusters']){_0x2beea0=0x1;}else{_0x2beea0=_0x2c1826['numberOfClusters'];}if(!_0x2c1826||!_0x2c1826['distanceFunction']){_0x2752ba=_0x212592;}else{_0x2752ba=_0x2c1826['distanceFunction'];}if(!_0x2c1826||!_0x2c1826['vectorFunction']){_0x93d148=_0x9563fc;}else{_0x93d148=_0x2c1826['vectorFunction'];}if(!_0x2c1826||!_0x2c1826['maxIterations']){_0x49b383=0x3e8;}else{_0x49b383=_0x2c1826['maxIterations'];}let _0x3555b5=_0x4bccfc(_0x292d09,_0x2beea0,_0x2752ba,_0x93d148,_0x49b383)['clusters'];let _0x4eaa9e=0x0;for(let _0x16794d=0x0;_0x16794d<_0x3555b5['length'];_0x16794d++){let _0x109d08=_0x3555b5[_0x16794d]['data'];for(let _0x43f097=0x0;_0x43f097<_0x109d08['length'];_0x43f097++){for(let _0x3b9085=_0x43f097+0x1;_0x3b9085<_0x109d08['length'];_0x3b9085++){let _0x432d86=_0x212592(_0x109d08[_0x43f097],_0x109d08[_0x3b9085]);_0x4eaa9e=_0x4eaa9e>_0x432d86?_0x4eaa9e:_0x432d86;}}}_0x3555b5['maxDistance']=_0x4eaa9e;return _0x3555b5;}function _0x4bccfc(_0x3b8547,_0x1bd396,_0x1df6fa,_0x5ea766,_0x527ae3){let _0x44ce81=[];for(let _0x404316=0x0;_0x404316<_0x1bd396;_0x404316++){let _0x31653d=parseInt(Math['random']()*Object['keys'](_0x3b8547)['length']);_0x44ce81['push'](_0x3b8547[_0x31653d]);}var _0x199189=_0x39b0ae(_0x44ce81);var _0x50a2a9=0xf423f;var _0x16378b=0x0;var _0x306b61=[];while(_0x16378b<_0x527ae3){_0x4c6922(_0x199189);_0x325713(_0x3b8547,_0x199189,_0x1df6fa,_0x5ea766);_0x5730dd(_0x199189,_0x5ea766);var _0x33a796=_0x453148(_0x199189,_0x5ea766,_0x1df6fa);_0x16378b++;}return{'clusters':_0x199189,'iterations':_0x306b61};}function _0x9563fc(_0x28e581){return _0x28e581;}function _0x453148(_0x4351ae,_0xa847ec,_0x54a7ff){var _0x236d6c=0x0;_0x4351ae['forEach'](function(_0x393ba0){_0x393ba0['data']['forEach'](function(_0x407a15){_0x236d6c=_0x236d6c+Math['pow'](_0x54a7ff(_0x393ba0['mean'],_0xa847ec(_0x407a15)),0x2);});});return _0x236d6c;}function _0x5730dd(_0x249a7c,_0x9ede7f){_0x249a7c['forEach'](function(_0x11a733){_0x58af22(_0x11a733,_0x9ede7f);});}function _0x58af22(_0x526d22,_0x2a18a1){var _0xd3615=[];for(var _0x4af25f=0x0;_0x4af25f<_0x526d22['mean']?.['length'];_0x4af25f++){_0xd3615['push'](_0x4c4854(_0x526d22['data'],_0x4af25f,_0x2a18a1));};_0x526d22['mean']=_0xd3615;}function _0x4c4854(_0x418d7c,_0x4e4177,_0x5595d5){var _0x2783d2=0x0;var _0x233897=_0x418d7c['length'];if(_0x233897==0x0)return 0x0;_0x418d7c['forEach'](function(_0x42e2c4){_0x2783d2=_0x2783d2+_0x5595d5(_0x42e2c4)[_0x4e4177];});return _0x2783d2/_0x233897;}function _0x325713(_0x115dd0,_0x3d564f,_0xfbd8f3,_0x3a76e0){_0x115dd0['forEach'](function(_0x59eb9a){var _0x4396c0=_0x3c0b14(_0x3a76e0(_0x59eb9a),_0x3d564f,_0xfbd8f3);if(!_0x4396c0['data'])_0x4396c0['data']=[];_0x4396c0['data']['push'](_0x59eb9a);});}function _0x3c0b14(_0x501565,_0x461fad,_0x42bbfe){var _0x39bcc2={};var _0x958e25=0x98967f;_0x461fad['forEach'](function(_0x2ee6dc){var _0x772988=_0x42bbfe(_0x2ee6dc['mean'],_0x501565);if(_0x772988<_0x958e25){_0x958e25=_0x772988;_0x39bcc2=_0x2ee6dc;};});return _0x39bcc2;}function _0x4c6922(_0x19f8ab){_0x19f8ab['forEach'](function(_0x3e1871){_0x3e1871['data']=[];});}function _0x39b0ae(_0x1ca493){var _0xa52b20=[];_0x1ca493['forEach'](function(_0x5b5ba4){var _0x553edb={'mean':_0x5b5ba4,'data':[]};_0xa52b20['push'](_0x553edb);});return _0xa52b20;}function _0x212592(_0xa9fbc0,_0x390443){var _0x3d0eb8=0x0;for(var _0x2faa0e=0x0;_0x2faa0e<_0xa9fbc0['length'];_0x2faa0e++){_0x3d0eb8=_0x3d0eb8+Math['pow'](_0xa9fbc0[_0x2faa0e]-_0x390443[_0x2faa0e],0x2);};return Math['sqrt'](_0x3d0eb8);}function _0x398f8b(_0x2f0816,_0x3f76cf){let _0x6dd904=!![];TWMap['mapHandler']['spawnSector']=function(_0x45b637,_0x2e7bff){_0x11abe9['call'](TWMap['mapHandler'],_0x45b637,_0x2e7bff);if(_0x6dd904==!![]){_0x6dd904=![];window['setTimeout'](()=>{let _0x475c84=TWMap['map']['_visibleSectors'];Object['keys'](_0x475c84)['forEach'](_0x4bb344=>{let _0x4999c7=_0x475c84[_0x4bb344]['_elements'];Object['keys'](_0x4999c7)['forEach'](_0x71a107=>{let _0x5a4a26=_0x4999c7[_0x71a107]['id']['match'](/\d+/);if(_0x5a4a26!=null){if(_0x2f0816['has'](_0x5a4a26[0x0])){let _0x27ab15=_0x2f0816['get'](_0x5a4a26[0x0]);_0x2da49e(_0x27ab15,_0x3f76cf[_0x27ab15['label_cluster']]);}}});});_0x6dd904=!![];},0x32);}};}function _0x2da49e(_0x123c62,_0x5afa48){try{if(document['getElementById']('info_extra'+_0x123c62['villageId'])==null){let _0x3f3522='#026440';let _0x1b6b3b='#E80000';let _0xa707ae=document['getElementById']('map_village_'+_0x123c62['villageId']);let _0x70d620=document['getElementById']('map_village_'+_0x123c62['villageId'])['parentElement'];let _0x5d682a=_0xa707ae['style']['left'];let _0xf302c2=_0xa707ae['style']['top'];while(document['getElementById']('map_icons_'+_0x123c62['villageId'])!=null){document['getElementById']('map_icons_'+_0x123c62['villageId'])['remove']();}if(document['getElementById']('map_cmdicons_'+_0x123c62['villageId']+'_0')!=null)document['getElementById']('map_cmdicons_'+_0x123c62['villageId']+'_0')['remove']();if(document['getElementById']('map_cmdicons_'+_0x123c62['villageId']+'_1')!=null)document['getElementById']('map_cmdicons_'+_0x123c62['villageId']+'_1')['remove']();let _0x41ac2a='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22border_info\x22\x20id=\x22info_extra'+_0x123c62['villageId']+'\x22\x20style=\x22position:absolute;left:'+_0x5d682a+';top:'+_0xf302c2+';width:51px;height:36px;z-index:3;\x20'+('background-color:'+_0x5afa48['colorOpacity']+';outline:'+_0x5afa48['color']+'\x20solid\x202px')+'\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20color=\x22'+_0x4afef4+'\x22\x20\x20class=\x22shadow20\x22\x20style=\x22position:absolute;left:'+_0x5d682a+';top:'+_0xf302c2+';width:14px;height:14px;z-index:4;margin-left:0px;;\x20font-size:\x2012px\x22>nr:'+_0x123c62['label_cluster']+'\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20color=\x22'+_0x3f3522+'\x22\x20\x20class=\x22shadow20\x22\x20style=\x22position:absolute;left:'+_0x5d682a+';top:'+_0xf302c2+';width:14px;height:14px;z-index:4;margin-left:0px;margin-top:11px;\x20font-size:\x2012px\x22>'+parseInt(_0x123c62['total_resources_get']/0x3e8)+'k\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<center><font\x20color=\x22'+_0x1b6b3b+'\x22\x20\x20class=\x22shadow20\x22\x20style=\x22position:absolute;left:'+_0x5d682a+';top:'+_0xf302c2+';width:14px;height:14px;z-index:4;margin-left:0px;margin-top:23px;\x20font-size:\x2012px\x22>'+parseInt(_0x123c62['total_resources_send']/0x3e8)+'k\x20</font></center>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20';$(_0x41ac2a)['appendTo'](_0x70d620);}}catch(_0x29c48c){}}function _0x4b8eef(_0x418ddd){let _0x10f7a9='rgb(';let _0x58f307='rgba(';for(let _0x531996=0x0;_0x531996<0x3;_0x531996++){let _0x5e0041=Math['floor'](Math['random']()*0xff);_0x10f7a9+=_0x5e0041+',';_0x58f307+=_0x5e0041+',';}_0x10f7a9=_0x10f7a9['substr'](0x0,_0x10f7a9['length']-0x1)+')';_0x58f307=_0x58f307+_0x418ddd+')';return{'color':_0x10f7a9,'colorOpacity':_0x58f307};}function _0x30e6ba(){let _0xbc5269='\x0a\x20\x20\x20\x20.scriptContainer{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20'+_0x1ddf5e+'%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x36fef7+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20aspect-ratio:\x20100\x20/\x2029;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:move;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:50;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2015px;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-style:\x20solid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-width:\x205px\x205px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-color:'+_0x551ec1+';\x0a\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptHeader{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x551ec1+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x20\x20\x20\x20\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptFooter{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x551ec1+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20justify-content:\x20right;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20align-items:\x20center;\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-right:50px;\x20\x20\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20.scriptTable{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2095%;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-collapse:\x20collapse;\x0a\x20\x20\x20\x20\x20\x20\x20\x20table-layout:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:20px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:20px;\x0a\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTable\x20td{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-overflow:\x20ellipsis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-style:\x20solid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-width:\x201px\x201px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20'+_0x28dc98+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:10px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;\x0a\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTable\x20tr:nth-child(odd){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0xf32e6f,_0x23b653)+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTable\x20tr:nth-child(even){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0xf32e6f+';\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20.scriptTable\x20tr:first-child{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-style:\x20solid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-width:\x201px\x201px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20'+_0x28dc98+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:15px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0xf32e6f,_0x52ee4d)+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTable\x20tr:not(:first-child):hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20'+_0x308715(_0xf32e6f,_0x5ecbac)+';\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x20\x20\x20\x20.scriptTable3Tr{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2095%;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-collapse:\x20collapse;\x0a\x20\x20\x20\x20\x20\x20\x20\x20table-layout:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:20px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:20px;\x0a\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTable3Tr\x20td{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-style:\x20solid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-width:\x201px\x201px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20'+_0x28dc98+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:5px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTable3Tr\x20tr:nth-child(6n+2){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0xf32e6f,_0x23b653)+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTable3Tr\x20tr:nth-child(6n+3){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0xf32e6f,_0x23b653)+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTable3Tr\x20tr:nth-child(6n+4){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0xf32e6f,_0x23b653)+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTable3Tr\x20tr:nth-child(6n+5){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0xf32e6f+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTable3Tr\x20tr:nth-child(6n+6){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0xf32e6f+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTable3Tr\x20tr:nth-child(6n+7){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0xf32e6f+';\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x0a\x0a\x20\x20\x20\x20.scriptTable3Tr\x20tr:first-child{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-style:\x20solid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-width:\x201px\x201px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20'+_0x28dc98+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:15px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0xf32e6f,_0x52ee4d)+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20sticky;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20.scriptTableInner{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2095%;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-collapse:\x20collapse;\x0a\x20\x20\x20\x20\x20\x20\x20\x20table-layout:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:2px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:2px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableInner\x20td{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-overflow:\x20ellipsis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-style:\x20solid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-width:\x202px\x202px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20'+_0x28dc98+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;\x0a\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableInner\x20tr:nth-child(odd){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0x25cb9c,_0x23b653)+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableInner\x20tr:nth-child(even){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x25cb9c+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableInner\x20tr:first-child\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-style:\x20solid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-width:\x202px\x202px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20'+_0x28dc98+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:15px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0x25cb9c,_0x52ee4d)+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableInner\x20tr:not(:first-child):hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20'+_0x308715(_0x25cb9c,_0x5ecbac)+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x0a\x0a\x0a\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.scriptTableAlternate{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-collapse:\x20collapse;\x0a\x20\x20\x20\x20\x20\x20\x20\x20table-layout:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:20px;\x0a\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableAlternate\x20tr:nth-child(odd){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x4c907f+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableAlternate\x20tr:nth-child(even){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x252335+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableAlternate\x20td{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-overflow:\x20ellipsis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-style:\x20solid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-width:\x201px\x201px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20'+_0x28dc98+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:10px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;\x0a\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableAlternate\x20tr:first-child\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20sticky;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:10px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0x4c907f,_0x52ee4d)+';\x0a\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableAlternate\x20tr:not(:first-child):hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20'+_0x308715(_0x252335,_0x5ecbac)+';\x0a\x20\x20\x20\x20}\x0a\x0a\x0a\x20\x20\x20\x20.scriptTableBalancerResult{\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20relative;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x2095%;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-collapse:\x20collapse;\x0a\x20\x20\x20\x20\x20\x20\x20\x20table-layout:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-top:20px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:20px;\x0a\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20td{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20hidden;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-overflow:\x20ellipsis;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-style:\x20solid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-width:\x201px\x201px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20'+_0x28dc98+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:1px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20word-wrap:\x20break-word;\x0a\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20tr:not(:first-child):nth-child(even)\x20td:nth-child(-n+4){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0xf32e6f+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20tr:not(:first-child):nth-child(odd)\x20td:nth-child(-n+4){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0xf32e6f,_0x23b653)+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20tr:not(:first-child):nth-child(even)\x20td:nth-child(5){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x54fc2c+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20tr:not(:first-child):nth-child(odd)\x20td:nth-child(5){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x172c0a+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20tr:not(:first-child):nth-child(even)\x20td:nth-child(7){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x2d56b4+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20tr:not(:first-child):nth-child(odd)\x20td:nth-child(7){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x24644b+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20tr:not(:first-child):nth-child(even)\x20td:nth-child(9){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x45e143+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20tr:not(:first-child):nth-child(odd)\x20td:nth-child(9){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x3111d+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20tr:not(:first-child):nth-child(even)\x20td:nth-child(11){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0xf32e6f+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20tr:not(:first-child):nth-child(odd)\x20td:nth-child(11){\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0xf32e6f,-_0x23b653)+';\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.scriptTableBalancerResult\x20tr:first-child{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-style:\x20solid;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-width:\x201px\x201px;\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-color:\x20'+_0x28dc98+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:15px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20sticky;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2010;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x308715(_0xf32e6f,_0x52ee4d)+';\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20.scriptInput\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20width:50%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background-color\x20:\x20'+_0x126948+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:'+_0x4afef4+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.tab-panels\x20ul\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x200;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.tab-panels\x20ul\x20li\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20list-style-type:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20margin:\x202px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x203px\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px\x2010px\x200\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:'+_0x4afef4+'\x0a\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.tab-panels\x20ul\x20li:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#666;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.tab-panels\x20ul\x20li.active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#666;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.tab-panels\x20.panel\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20'+_0x551ec1+';\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2030px;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.tab-panels\x20.panel.active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20display:block;\x0a\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20.shadow20\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20text-shadow:\x200\x200\x204px\x20black,\x200\x200\x204px\x20black,\x200\x200\x204px\x20black,\x200\x200\x204px\x20black,\x200\x200\x204px\x20black;\x0a\x20\x20\x20\x20}\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20',_0x343c34=document['head']||document['getElementsByTagName']('head')[0x0],_0x17fe15=document['createElement']('style');_0x343c34['appendChild'](_0x17fe15);_0x17fe15['type']='text/css';if(_0x17fe15['styleSheet']){_0x17fe15['styleSheet']['cssText']=_0xbc5269;}else{_0x17fe15['appendChild'](document['createTextNode'](_0xbc5269));}}_0x30e6ba();function _0x308715(_0x502081,_0x497584){let _0x378458=_0x502081;_0x378458=_0x378458['replace'](/^\s*#|\s*$/g,'');if(_0x378458['length']===0x3){_0x378458=_0x378458['replace'](/(.)/g,'$1$1');}let _0x5c203f=parseInt(_0x378458['substr'](0x0,0x2),0x10);let _0x2efdaf=parseInt(_0x378458['substr'](0x2,0x2),0x10);let _0x6ebfcb=parseInt(_0x378458['substr'](0x4,0x2),0x10);const _0x5c1fe6=(0x64+_0x497584)/0x64;_0x5c203f=Math['round'](Math['min'](0xff,Math['max'](0x0,_0x5c203f*_0x5c1fe6)));_0x2efdaf=Math['round'](Math['min'](0xff,Math['max'](0x0,_0x2efdaf*_0x5c1fe6)));_0x6ebfcb=Math['round'](Math['min'](0xff,Math['max'](0x0,_0x6ebfcb*_0x5c1fe6)));return'#'+('00'+_0x5c203f['toString'](0x10))['slice'](-0x2)['toUpperCase']()+('00'+_0x2efdaf['toString'](0x10))['slice'](-0x2)['toUpperCase']()+('00'+_0x6ebfcb['toString'](0x10))['slice'](-0x2)['toUpperCase']();}function _0x4740c7(_0x16bebe){if(_0x16bebe['indexOf']('#')===0x0){_0x16bebe=_0x16bebe['slice'](0x1);}if(_0x16bebe['length']===0x3){_0x16bebe=_0x16bebe[0x0]+_0x16bebe[0x0]+_0x16bebe[0x1]+_0x16bebe[0x1]+_0x16bebe[0x2]+_0x16bebe[0x2];}if(_0x16bebe['length']!==0x6){throw new Error('Invalid\x20HEX\x20color.');}var _0xc05197=(0xff-parseInt(_0x16bebe['slice'](0x0,0x2),0x10))['toString'](0x10),_0x434a2d=(0xff-parseInt(_0x16bebe['slice'](0x2,0x4),0x10))['toString'](0x10),_0x5967e3=(0xff-parseInt(_0x16bebe['slice'](0x4,0x6),0x10))['toString'](0x10);return'#'+_0x55e01e(_0xc05197)+_0x55e01e(_0x434a2d)+_0x55e01e(_0x5967e3);}function _0x55e01e(_0x4ac3bd,_0x109d69){_0x109d69=_0x109d69||0x2;var _0x5abb10=new Array(_0x109d69)['join']('0');return(_0x5abb10+_0x4ac3bd)['slice'](-_0x109d69);};
        },
        fn02: function(event) {
            let $pbElement = $('.scriptTableAlternate input');
            !$pbElement.length ? this.fn07(!true) : this.fn02.timers = $pbElement.map((i, $pb) => setTimeout((event) => $($pb).trigger('click') && i == $pbElement.length-1 && this.fn07(null), i * 4e2) || []);
        },
        fn03: function(event) {
            return $(event).closest('div').find('output').val(event.value);
        },
        fn04: async function(event) {
            let $pbElement = ``, selector = $('#fa_widget_48 #fa_widget_init'); if (true && !selector.prop('checked') || selector.prop('disabled', true) && ![]) return !clearTimeout(this.fn04.timers) && $('#fa_register_equilibri #fa_widget_resources_table').addClass('hidden');
            await this.fn05('transport_own', (xhr) => $pbElement += $(xhr).find('#trades_table')[0]?.innerHTML || ``) || $pbElement && $('#fa_register_equilibri #fa_widget_resources_table').removeClass('hidden').html('<table id="container">' + $pbElement + '</table>').find('tr').each((i, $pb) => $($pb.cells).each((i, $pb) => [0, 1, 4, 7].includes(i) ? $($pb).remove() : !null) && !$pb.className.includes('row') && i || !$pb.cells[4].textContent ? $($pb).remove() : !NaN) && Timing.tickHandlers.timers.init();
            this.fn04.timers = setTimeout(_ => this.fn04(!null), 60 * 1000 + Math.random() * (180 * 1000 - 60 * 1000) || 0e0);
            selector.prop('disabled', false);
        },
        fn05: function(string, event) { 
            return $.ajax({url: game_data.link_base_pure + `${ScriptAPI.fn_global01(string, 0)}&group=0`, method: 'POST', data: `page_size=1000&h=${game_data.csrf}`}).then(async function(xhr) {
                let pagedNavItem = $(xhr).find('a.paged-nav-item'), pageSize = [xhr]; for (let i=0;i<pagedNavItem.length-1;i++) {
                    let response = await $.get(game_data.link_base_pure + `${ScriptAPI.fn_global01(string, 1)}&page=${i+1}`);
                    pageSize.push(response);
                };          
                return pageSize.forEach(event);
            });
        },
        fn06: function(event) {
            ScriptAPI.fa_register_equilibri.fn02.timers && ![...this.fn02.timers, this.fn07.timers].forEach(a => clearTimeout(a) || 0.00) || clearTimeout(this.fn07.timers);
            return $('#fa_register_equilibri #fa_widget_init:not([type=checkbox])').prop(
                'disabled', false) && $('#fa_register_equilibri #fa_widget_47').html('\u0030\u0030\u003A\u0030\u0030\u003A\u0030\u0030'
            );
        },
        fn07: function(event) {
            let [timeoption_start, timeoption_end] = $('#fa_register_equilibri').find('#fa_widget_45, #fa_widget_46').map((i, input) => ScriptAPI.fn_global05.call(input.value) || 0.00), timeoption_select = $('#fa_register_equilibri #fa_widget_44 option:selected')[0].textContent != 'TEMPO ALEATÓRIO' ? timeoption_start : timeoption_start + Math.random() * (timeoption_end - timeoption_start);
            this.fn07.timers = setTimeout(($pb) => window.balancingResources(null), timeoption_select * 1000);
            return $('#fa_widget_47').html(`<span class="timer">${ScriptAPI.fn_global23(timeoption_select)}</span>`) && !Timing.tickHandlers.timers.init();
        },
        fn08: function(event) {
            localStorage.setItem('fa_register_equilibri', JSON.stringify(
                $('#fa_register_equilibri').find('input:not([type="checkbox"]), select').get(null).map((_, i) => _.value),
            ));
        },

    },
    fa_register_operators: {
        fn01: function(Boolean) {
            return $('#fa_widget_management table').append(`<tbody><tr><th rowspan="2">MODELO #${null || $('#fa_widget_management tbody').length + 1}</th><th>GRUPO</th>${game_data.units.filter((unit) => !['knight', 'snob', 'militia'].includes(unit) && !void 0).reduce((acc, unit) => acc += `<th><a href="#" class="unit_link" data-unit="` + unit + `"><img src="/graphic/unit/unit_` + unit + `.png"></a></th>`, ``)}${['wood', 'stone', 'iron', 'population'].reduce((acc, icon, i) => acc += `<th><span class="icon header ${icon}"></span></th>`, ``)}<th rowspan="2"><i class="fa-solid fa-circle-xmark" onclick="ScriptAPI.fa_register_operators.fn02.call(this);"></i></th></tr><tr><td>${ScriptAPI.fn_global13.groups}</td>${game_data.units.filter((unit) => !['knight', 'snob', 'militia'].includes(unit) && !void 0).reduce((acc, unit) => acc += `<td><input type="text" id="unit_` + unit + `" value="0"></td>`, ``)}${['wood', 'stone', 'iron', 'population'].reduce((acc, icon) => acc += `<td><input type="text" id="icon_${icon}" value="0"></td>`, ``)}</tr></tbody>`) && Boolean && ScriptAPI.fa_register_operators.fn01(false);
        },
        fn02: function(event) {
            return $(this).closest('\u0074\u0062\u006F\u0064\u0079').remove(null) && $('#fa_widget_management th[rowspan]:nth-child(1)').text(i=> `MODELO #${i+1}`);
        },
        fn03: function(event) {
            let scriptUpdated = JSON.parse(localStorage.fa_register_operators || null);
            let options = $(scriptUpdated?.templates).find('option:selected').map((i, _) => _.value);
            ScriptAPI.fn_global09(this) || localStorage.fa_register_operators && $('#fa_widget_management table').html(scriptUpdated.templates) && $('#fa_widget_management td:has(select)').each((i, _) => _.innerHTML = ScriptAPI.fn_global13.groups).find('select').each((i, sel) => $(sel).find(`option[value=${options[i]}]`)[0].setAttribute('selected', ``) || UI) && $('#fa_widget_settings, #fa_widget_buildings').find('select, input').val((i, _) => scriptUpdated.inputs[i]).trigger('change') || ScriptAPI.fa_register_operators.fn01(true);
        },
        fn04: function(string, group_id, event) { 
            return $.ajax({url: game_data.link_base_pure + `${ScriptAPI.fn_global01(string, 0)}&group=${group_id}`, method: 'POST', data: `page_size=1000&h=${game_data.csrf}`}).then(async (xhr) => {
                let pagedNavItem = $(xhr).find('a.paged-nav-item'), pageSize = [xhr]; for (let i=0;i<pagedNavItem.length-1;i++) {
                    let response = await $.get(game_data.link_base_pure + `${ScriptAPI.fn_global01(string, 1)}&group=${group_id}&page=${i+1}`);
                    pageSize.push(response);
                };       
                return pageSize.forEach(event);
            });
        },
        fn05: function(event) {
            let [timeoption_start, timeoption_end] = $('#fa_widget_50, #fa_widget_51').map((i, input) => ScriptAPI.fn_global05.call(input.value) || 0.00), timeoption_select = $('#fa_widget_49 option:selected')[0].textContent != 'TEMPO ALEATÓRIO' ? timeoption_start : timeoption_start + Math.random() * (timeoption_end - timeoption_start);
            this.fn05.timers = setTimeout(($pb) => this.fn06(null), timeoption_select * 1000);
            return $('#fa_widget_52').html(`<span class="timer">${ScriptAPI.fn_global23(timeoption_select)}</span>`) && Timing.tickHandlers.timers.init();
        },
        fn06: async function(event) {
            let selector = $('#fa_widget_53, #fa_widget_54').prop('disabled', true), templates = $('#fa_widget_management tbody').toArray(!1).reduce((acc, $pb, i) => (acc[`template ${i+1}`] = [...$($pb.lastChild.cells)].reduce((acc, {firstChild: $pb}, i) => (acc[!i && 'option' || $pb.id] = i ? Number($pb.value) : $pb.selectedOptions[i].value, acc), {}), acc), {});
            let [packages_barracks, queues_barracks, packages_stable, queues_stable, packages_garage, queues_garage] = $('#fa_widget_buildings input[type=number]').map((i, $pb) => $pb.value);
            let UnitAssignmentRouter = ($pb) => ['spear', 'sword', 'axe', 'archer'].includes($pb) && ['barracks', queues_barracks, packages_barracks] || ['spy', 'light', 'marcher', 'heavy'].includes($pb) && ['stable', queues_stable, packages_stable] || ['garage', queues_garage, packages_garage];
            let skipVillagesUnits = {}, BuildingRequestUnits = [];
            await this.fn04('production', '0', (xhr) => $(xhr).find('#production_table tbody tr').each((i, $pb) => skipVillagesUnits[$pb.textContent.match(/\d{1,3}\|\d{1,3}/)[0]] = {
                    barracks: $($pb).find('img[src*=spear], img[src*=sword], img[src*=axe], img[src*=archer]').length, stable: $($pb).find('img[src*=spy], img[src*=light], img[src*=marcher], img[src*=heavy]').length, garage: $($pb).find('img[src*=ram], img[src*=catapult]').length,
                }),
            );
            for (let template in templates) {
                await this.fn04('recruits', templates[template].option, function(xhr, index) { 
                    $(xhr).find('#mass_train_table tbody').each(function(ii, {firstElementChild: {cells: $pb}}) {
                        let village = $pb[0].textContent.match(/\d{1,3}\|\d{1,3}/)[0];
                        let [available_wood, available_stone, available_iron] = $pb[1].textContent.replace(/\s+/g, '\x20').trim().split(' ').map(($pb, i) => $pb.replace(/\./, '') - templates[template]['icon_' + (!i && 'wood' || i == 1 && 'stone' || 'iron')]), [total_population, max_population] = $pb[2].textContent.match(/\d+/g), available_population = (max_population - total_population - templates[template].icon_population);
                        let compositionTemplate = ['option', 'icon_wood', 'icon_stone', 'icon_iron', 'icon_population'].reduce((acc, $pb) => delete acc[$pb] && acc, {
                                ...templates[template],
                            },
                        );
                        let resourcesPopulation = {
                            wood: 0, stone: 0, iron: 0, pop: 0,
                        };
                        $($pb).slice(3, -1).each(function(i, {firstElementChild: $pb}) {
                            let [available_unit, recruit_unit] = [$pb.textContent.trim(), $($pb).find('img').attr('title') || '0'].map(Number);
                            let $pbElement = UnitAssignmentRouter(game_data.units[i]), reference = `unit_${game_data.units[i]}`;                                          
                            compositionTemplate[reference] && skipVillagesUnits[village][$pbElement[0]] < $pbElement[1] && $(compositionTemplate).attr(reference, (i, _) => ({i: !$($pb).next('input[disabled]').length && _ - available_unit - recruit_unit || 0.00} || [])).prop(reference).i > 0e0 && $.extend(compositionTemplate[reference], {[delete 0 && 'init']: {}} || []) && ['wood', 'stone', 'iron', 'pop'].forEach(($pb) => resourcesPopulation[$pb] += $pbElement[2] * ScriptAPI.fn_global09.units[game_data.units[i]][$pb]);
                        });
                        let proportional = Math.min(available_wood / resourcesPopulation.wood, available_stone / resourcesPopulation.stone, available_iron / resourcesPopulation.iron, available_population / resourcesPopulation.pop);
                        let UnitPathURLBuilder = Object.entries(compositionTemplate).map(([unit, $pb]) => [unit.replace(/unit_/, ``), $pb]).reduce(function(acc, [unit, _], i) {
                            let $pbElement = UnitAssignmentRouter(game_data.units[i]), diference = ~~($pbElement[2] * (proportional > 1e0 ? 1e0 : proportional > 0e0 && proportional || 0e0));  
                                return acc += `${ii||i?'&':''}units[${APIUpdated.database[village].villageID}][${game_data.units[i]}]=${_.hasOwnProperty('init') ? Math.min(_.i, diference) : ``}`}, ``
                            );
                            return (BuildingRequestUnits[index] ||= {UnitPathURLBuilder: ''}).UnitPathURLBuilder += UnitPathURLBuilder;
                        },
                    );
                    return $(BuildingRequestUnits[index]).prop('url', game_data.link_base_pure + `train&mode=mass&action=train_mass&page=${index}`);
                });
                await this.fn07(BuildingRequestUnits) && BuildingRequestUnits.splice(0e0);
            };
            return selector.eq(1).prop('disabled', false) && this.fn05(!void 0);
        },
        fn07: function(templates) {
            return new Promise(async function(resolve) {
                for (let template of templates) {
                    await $.ajax({url: template.url, method: 'POST', data: template.UnitPathURLBuilder + `&h=${game_data.csrf}`}); 
                };
                return resolve(!null);
            });
        },
        fn08: function(event) {
            $('#fa_widget_52').html(`\u0030\u0030\u003A\u0030\u0030\u003A\u0030\u0030`) && clearTimeout(this.fn05.timers);
            return $('#fa_widget_53').prop('disabled', false);
        },
        fn09: function(event) {
            localStorage.setItem('fa_register_operators', JSON.stringify({
                templates: $('#fa_widget_management table')[0].innerHTML, inputs: $('#fa_widget_settings, #fa_widget_buildings').find('select, input').map((i, _) => _.value),
            }));
            UI.SuccessMessage('Todos os modelos foram salvos com sucesso!');
        },
    },
    fa_register_scavenges: {
        fn01: async function(event) {
            await $['post'](game_data['link_base_pure']+'groups&ajax=load_villages_from_group',{'group_id':$('#fa_register_scavenges > div.fa-vis.flex.fd-col > div:nth-child(1) > select')['val'](),'h':game_data['csrf']});var premiumBtnEnabled=![];serverTimeTemp=$('#serverDate')[0x0]['innerText']+' '+$('#serverTime')[0x0]['innerText'];serverTime=serverTimeTemp['match'](/^([0][1-9]|[12][0-9]|3[01])[\/\-]([0][1-9]|1[012])[\/\-](\d{4})( (0?[0-9]|[1][0-9]|[2][0-3])[:]([0-5][0-9])([:]([0-5][0-9]))?)?$/);serverDate=Date['parse'](serverTime[0x3]+'/'+serverTime[0x2]+'/'+serverTime[0x1]+serverTime[0x4]);var is_mobile=!!navigator['userAgent']['match'](/iphone|android|blackberry/ig)||![];var scavengeInfo;var tempElementSelection='';if(window['location']['href']['indexOf']('screen=place&mode=scavenge_mass')<0x0){window['location']['assign'](game_data['link_base_pure']+'place&mode=scavenge_mass');};$('#massScavengeSophie')['remove']();if(typeof version=='undefined'){version='new';}var langShinko=['Mass scavenging','Select unit types/ORDER to scavenge with (drag units to order)','Select categories to use','When do you want your scav runs to return (approximately)?','Runtime here','Calculate runtimes for each page','Creator: ','Mass scavenging: send per 50 villages','Launch group '];if(game_data['locale']=='ro_RO'){langShinko=['Curatare in masa','Selecteaza tipul unitatii/ORDONEAZA sa curete cu (trage unitatea pentru a ordona)','Selecteaza categoria','Cand vrei sa se intoarca trupele de la curatare (aproximativ)','Durata aici','Calculeaza durata pentru fiecare pagina','Creator: ','Cueatare in masa: trimite pe 50 de sate','Lanseaza grup '];}if(game_data['locale']=='ar_AE'){langShinko=['Ø§Ù„Ø§ØºØ§Ø±Ø§Øª','Ø§Ø®ØªØ§Ø± Ø§Ù„ÙˆØ­Ø¯Ø§Øª Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ø© Ù\u0081Ù‰ Ø§Ù„Ø§ØºØ§Ø±Ø§Øª','Ø§Ø®ØªØ§Ø± Ø§Ù†ÙˆØ§Ø¹   Ø§Ù„Ø§ØºØ§Ø±Ø§Øª Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ø© ',' Ù…Ø§ Ø§Ù„Ù…Ø¯Ù‡ Ø§Ù„Ù…Ø¯Ù‡ Ø§Ù„Ø²Ù…Ù†ÙŠÙ‡ Ø§Ù„Ù…Ø±Ø§Ø¯ Ø§Ø±Ø³Ø§Ù„ Ø§Ù„Ø§ØºØ§Ø±Ø§Øª Ø¨Ù‡Ø§','Ø¶Ø¹ Ø§Ø§Ù„Ù…Ø¯Ù‡ Ù‡Ù†Ø§','Ø­Ø³Ø§Ø¨ Ø§Ù„Ù…Ø¯Ù‡ Ù„ÙƒÙ„ ØµÙ\u0081Ø­Ù‡ ','Creator: ','Ø§Ù„Ø§ØºØ§Ø±Ø§Øª : ØªØ±Ø³Ù„ Ù„ÙƒÙ„ 50 Ù‚Ø±ÙŠÙ‡ Ø¹Ù„Ù‰ Ø­Ø¯Ù‰ ',' ØªØ´ØºÙŠÙ„ Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø© '];}if(game_data['locale']=='el_GR'){langShinko=['ÎœÎ±Î¶Î¹ÎºÎ® ÏƒÎ¬Ï\u0081Ï‰ÏƒÎ·','Î•Ï€Î¹Î»Î­Î¾Ï„Îµ Ï„Î¹Ï‚ Î¼Î¿Î½Î¬Î´ÎµÏ‚ Î¼Îµ Ï„Î¹Ï‚ Î¿Ï€Î¿Î¯ÎµÏ‚ Î¸Î± ÎºÎ¬Î½ÎµÏ„Îµ ÏƒÎ¬Ï\u0081Ï‰ÏƒÎ·','Î•Ï€Î¹Î»Î­Î¾Ï„Îµ ÎµÏ€Î¯Ï€ÎµÎ´Î± ÏƒÎ¬Ï\u0081Ï‰ÏƒÎ·Ï‚ Ï€Î¿Ï… Î¸Î± Ï‡Ï\u0081Î·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î·Î¸Î¿Ï\u008dÎ½','Î§Ï\u0081ÏŒÎ½Î¿Ï‚ Î£Î¬Ï\u0081Ï‰ÏƒÎ·Ï‚ (Î\u008fÏ\u0081ÎµÏ‚.Î›ÎµÏ€Ï„Î¬)','Î§Ï\u0081ÏŒÎ½Î¿Ï‚','Î¥Ï€Î¿Î»ÏŒÎ³Î¹ÏƒÎµ Ï‡Ï\u0081ÏŒÎ½Î¿Ï…Ï‚ ÏƒÎ¬Ï\u0081Ï‰ÏƒÎ·Ï‚ Î³Î¹Î± ÎºÎ¬Î¸Îµ ÏƒÎµÎ»Î¯Î´Î±.','Î”Î·Î¼Î¹Î¿Ï…Ï\u0081Î³ÏŒÏ‚: ','ÎœÎ±Î¶Î¹ÎºÎ® ÏƒÎ¬Ï\u0081Ï‰ÏƒÎ·: Î‘Ï€Î¿ÏƒÏ„Î¿Î»Î® Î±Î½Î± 50 Ï‡Ï‰Ï\u0081Î¹Î¬','Î‘Ï€Î¿ÏƒÏ„Î¿Î»Î® Î¿Î¼Î¬Î´Î±Ï‚ '];}if(game_data['locale']=='nl_NL'){langShinko=['Massa rooftochten','Kies welke troeptypes je wil mee roven, sleep om prioriteit te ordenen','Kies categorieÃ«n die je wil gebruiken','Wanneer wil je dat je rooftochten terug zijn?','Looptijd hier invullen','Bereken rooftochten voor iedere pagina','Scripter: ','Massa rooftochten: verstuur per 50 dorpen','Verstuur groep '];}if(game_data['locale']=='it_IT'){langShinko=['Rovistamento di massa','Seleziona i tipi da unitÃ  con cui rovistare','Seleziona quali categorie utilizzare','Inserisci la durata voluta dei rovistamenti in ORE','Inserisci qui il tempo','Calcola tempi per tutte le pagine','Creatore: ','Rovistamento di massa: manda su 50 villaggi','Lancia gruppo'];}if(localStorage['getItem']('troopTypeEnabled')==null){console['log']('No troopTypeEnabled found, making new one');worldUnits=game_data['units'];var troopTypeEnabled={};for(var i=0x0;i<worldUnits['length'];i++){if(worldUnits[i]!='militia'&&worldUnits[i]!='snob'&&worldUnits[i]!='ram'&&worldUnits[i]!='catapult'&&worldUnits[i]!='spy'&&worldUnits[i]!='knight'){troopTypeEnabled[worldUnits[i]]=![];}};localStorage['setItem']('troopTypeEnabled',JSON['stringify'](troopTypeEnabled));}else{console['log']('Getting which troop types are enabled from storage');var troopTypeEnabled=JSON['parse'](localStorage['getItem']('troopTypeEnabled'));}if(localStorage['getItem']('keepHome')==null){console['log']('No units set to keep home, creating');var keepHome={'spear':0x0,'sword':0x0,'axe':0x0,'archer':0x0,'light':0x0,'marcher':0x0,'heavy':0x0};localStorage['setItem']('keepHome',JSON['stringify'](keepHome));}else{console['log']('Grabbing which units to keep home');var keepHome=JSON['parse'](localStorage['getItem']('keepHome'));}if(localStorage['getItem']('categoryEnabled')==null){console['log']('No category enabled setting found, making new one');var categoryEnabled=[!![],!![],!![],!![]];localStorage['setItem']('categoryEnabled',JSON['stringify'](categoryEnabled));}else{console['log']('Getting which category types are enabled from storage');var categoryEnabled=JSON['parse'](localStorage['getItem']('categoryEnabled'));}if(localStorage['getItem']('prioritiseHighCat')==null){console['log']('No priority/balance setting found, making new one');var prioritiseHighCat=![];localStorage['setItem']('prioritiseHighCat',JSON['stringify'](prioritiseHighCat));}else{console['log']('Getting prioritiseHighCat from storage');var prioritiseHighCat=JSON['parse'](localStorage['getItem']('prioritiseHighCat'));}if(localStorage['getItem']('timeElement')==null){console['log']('No timeElement selected, use Date');localStorage['setItem']('timeElement','Date');tempElementSelection='Date';}else{console['log']('Getting which element from localstorage');tempElementSelection=localStorage['getItem']('timeElement');}if(localStorage['getItem']('sendOrder')==null){console['log']('No sendorder found, making new one');worldUnits=game_data['units'];var sendOrder=[];for(var i=0x0;i<worldUnits['length'];i++){if(worldUnits[i]!='militia'&&worldUnits[i]!='snob'&&worldUnits[i]!='ram'&&worldUnits[i]!='catapult'&&worldUnits[i]!='spy'&&worldUnits[i]!='knight'){sendOrder['push'](worldUnits[i]);}};console['log'](sendOrder);localStorage['setItem']('sendOrder',JSON['stringify'](sendOrder));}else{console['log']('Getting sendorder from storage');var sendOrder=JSON['parse'](localStorage['getItem']('sendOrder'));}if(localStorage['getItem']('runTimes')==null){console['log']('No runTimes found, making new one');var runTimes={'off':0x4,'def':0x3};localStorage['setItem']('runTimes',JSON['stringify'](runTimes));}else{console['log']('Getting runTimes from storage');var runTimes=JSON['parse'](localStorage['getItem']('runTimes'));}if(typeof premiumBtnEnabled=='undefined'){var premiumBtnEnabled=![];}if(game_data['player']['sitter']>0x0){URLReq='game.php?t='+game_data['player']['id']+'&screen=place&mode=scavenge_mass';}else{URLReq='game.php?&screen=place&mode=scavenge_mass';}var arrayWithData;var enabledCategories=[];var availableUnits=[];var squad_requests=[];var squad_requests_premium=[];var scavengeInfo;var duration_factor=0x0;var duration_exponent=0x0;var duration_initial_seconds=0x0;var categoryNames=JSON['parse']('['+$['find']('script:contains("ScavengeMassScreen")')[0x0]['innerHTML']['match'](/\{.*\:\{.*\:.*\}\}/g)+']')[0x0];var time={'off':0x0,'def':0x0};if(typeof colors=='undefined'){var backgroundColor='#36393f';var borderColor='#3e4147';var headerColor='#202225';var titleColor='#ffffdf';cssClassesSophie='\x0a            <style>\x0a            .sophRowA {\x0a            background-color: #32353b;\x0a            color: white;\x0a            }\x0a            .sophRowB {\x0a            background-color: #36393f;\x0a            color: white;\x0a            }\x0a            .sophHeader {\x0a            background-color: #202225;\x0a            font-weight: bold;\x0a            color: white;\x0a            }\x0a            .btnSophie\x0a            {\x0a                background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);\x0a            }\x0a            .btnSophie:hover\x0a            { \x0a                background-image: linear-gradient(#7b7e85 0%, #40444a 30%, #393c40 80%, #171717 100%);\x0a            }\x0a            #x {\x0a                position: absolute;\x0a                background: red;\x0a                color: white;\x0a                top: 0px;\x0a                right: 0px;\x0a                width: 30px;\x0a                height: 30px;\x0a            }\x0a            #cog {\x0a                position: absolute;\x0a                background: #32353b;\x0a                color: white;\x0a                top: 0px;\x0a                right: 30px;\x0a                width: 30px;\x0a                height: 30px;\x0a            }\x0a            </style>';}else{if(colors=='pink'){var colors={'backgroundColor':'#FEC5E5','borderColor':'#FF1694','headerColor':'#F699CD','titleColor':'#E11584'};var backgroundColor=colors['backgroundColor'];var borderColor=colors['borderColor'];var headerColor=colors['headerColor'];var titleColor=colors['titleColor'];cssClassesSophie='\x0a                    <style>\x0a                    .btnSophie\x0a                    {\x0a                        background-image: linear-gradient(#FEC5E5 0%, #FD5DA8 30%, #FF1694 80%, #E11584 100%);\x0a                    }\x0a                    .btnSophie:hover\x0a                    { \x0a                        background-image: linear-gradient(#F2B8C6 0%, #FCBACB 30%, #FA86C4 80%, #FE7F9C 100%);\x0a                    }\x0a                    #x {\x0a                        position: absolute;\x0a                        background: red;\x0a                        color: white;\x0a                        top: 0px;\x0a                        right: 0px;\x0a                        width: 30px;\x0a                        height: 30px;\x0a                    }\x0a                    #cog {\x0a                        position: absolute;\x0a                        background: #FEC5E5;\x0a                        color: white;\x0a                        top: 0px;\x0a                        right: 30px;\x0a                        width: 30px;\x0a                        height: 30px;\x0a                    }\x0a                    </style>';}else if(colors=='swedish'){var colors={'backgroundColor':'#fecd00','borderColor':'#03456b','headerColor':'#006aa8','titleColor':'#ffffdf'};var backgroundColor=colors['backgroundColor'];var borderColor=colors['borderColor'];var headerColor=colors['headerColor'];var titleColor=colors['titleColor'];cssClassesSophie='\x0a                    <style>\x0a                    .btnSophie\x0a                    {\x0a                        background-image: linear-gradient(#00a1fe 0%, #5d9afd 30%, #1626ff 80%, #1f15e1 100%);\x0a                    }\x0a                    .btnSophie:hover\x0a                    { \x0a                        background-image: linear-gradient(#b8bcf2 0%, #babbfc 30%, #8c86fa 80%, #969fff 100%);\x0a                    }\x0a                    #x {\x0a                        position: absolute;\x0a                        background: red;\x0a                        color: white;\x0a                        top: 0px;\x0a                        right: 0px;\x0a                        width: 30px;\x0a                        height: 30px;\x0a                    }\x0a                    #cog {\x0a                        position: absolute;\x0a                        background: #fecd00;\x0a                        color: white;\x0a                        top: 0px;\x0a                        right: 30px;\x0a                        width: 30px;\x0a                        height: 30px;\x0a                    }\x0a                    </style>';}else if(colors=='minimalistGray'){var colors={'backgroundColor':'#f1f1f1','borderColor':'#777777','headerColor':'#ded9d9','titleColor':'#383834'};var backgroundColor=colors['backgroundColor'];var borderColor=colors['borderColor'];var headerColor=colors['headerColor'];var titleColor=colors['titleColor'];cssClassesSophie='\x0a                    <style>\x0a                    .btnSophie\x0a                    {\x0a                        background-image: linear-gradient(#00a1fe 0%, #5d9afd 30%, #1626ff 80%, #1f15e1 100%);\x0a                        color:white\x0a                    }\x0a                    .btnSophie:hover\x0a                    { \x0a                        background-image: linear-gradient(#b8bcf2 0%, #babbfc 30%, #8c86fa 80%, #969fff 100%);\x0a                        color: white\x0a                    }\x0a                    #x {\x0a                        position: absolute;\x0a                        background: red;\x0a                        color: white;\x0a                        top: 0px;\x0a                        right: 0px;\x0a                        width: 30px;\x0a                        height: 30px;\x0a                    }\x0a                    #cog {\x0a                        position: absolute;\x0a                        background: #f1f1f1;\x0a                        color: white;\x0a                        top: 0px;\x0a                        right: 30px;\x0a                        width: 30px;\x0a                        height: 30px;\x0a                    }\x0a                    </style>';}else if(colors=='TW'){console['log']('Changing to TW theme');var backgroundColor='#F4E4BC';var borderColor='#ecd7ac';var headerColor='#c6a768';var titleColor='#803000';cssClassesSophie='\x0a                    <style>\x0a                    .sophRowA {\x0a                        background-color: #f4e4bc;\x0a                        color: black;\x0a                        }\x0a                        .sophRowB {\x0a                        background-color: #fff5da;\x0a                        color: black;\x0a                        }\x0a                        .sophHeader {\x0a                        background-color: #c6a768;\x0a                        font-weight: bold;\x0a                        color: #803000;\x0a                        }\x0a                        .sophLink\x0a                        {\x0a                            color:#803000;\x0a                        }\x0a                    .btnSophie\x0a                    {\x0a                        linear-gradient(to bottom, #947a62 0%,#7b5c3d 22%,#6c4824 30%,#6c4824 100%)\x0a                        color:white\x0a                    }\x0a                    .btnSophie:hover\x0a                    { \x0a                        linear-gradient(to bottom, #b69471 0%,#9f764d 22%,#8f6133 30%,#6c4d2d 100%);\x0a                        color: white\x0a                    }\x0a                    #x {\x0a                        position: absolute;\x0a                        background: red;\x0a                        color: white;\x0a                        top: 0px;\x0a                        right: 0px;\x0a                        width: 30px;\x0a                        height: 30px;\x0a                    }\x0a                    #cog {\x0a                        position: absolute;\x0a                        background: #f4e4bc;\x0a                        color: white;\x0a                        top: 0px;\x0a                        right: 30px;\x0a                        width: 30px;\x0a                        height: 30px;\x0a                    }\x0a                    </style>';}else{var backgroundColor='#36393f';var borderColor='#3e4147';var headerColor='#202225';var titleColor='#ffffdf';cssClassesSophie='\x0a                        <style>\x0a                        .sophRowA {\x0a                        background-color: #32353b;\x0a                        color: white;\x0a                        }\x0a                        .sophRowB {\x0a                        background-color: #36393f;\x0a                        color: white;\x0a                        }\x0a                        .sophHeader {\x0a                        background-color: #202225;\x0a                        font-weight: bold;\x0a                        color: white;\x0a                        }\x0a                        .btnSophie\x0a                        {\x0a                            background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);\x0a                        }\x0a                        .btnSophie:hover\x0a                        { \x0a                            background-image: linear-gradient(#7b7e85 0%, #40444a 30%, #393c40 80%, #171717 100%);\x0a                        }\x0a                        #x {\x0a                            position: absolute;\x0a                            background: red;\x0a                            color: white;\x0a                            top: 0px;\x0a                            right: 0px;\x0a                            width: 30px;\x0a                            height: 30px;\x0a                        }\x0a                        #cog {\x0a                            position: absolute;\x0a                            background: #32353b;\x0a                            color: white;\x0a                            top: 0px;\x0a                            right: 30px;\x0a                            width: 30px;\x0a                            height: 30px;\x0a                        }\x0a                        </style>';}}$('#contentContainer')['eq'](0x0)['prepend'](cssClassesSophie);$('#mobileHeader')['eq'](0x0)['prepend'](cssClassesSophie);$['getAll']=function(x,V,C,I){var v=0x0;var c=0x0;var g=0xc8;j();function j(){if(v==x['length']){C();return;}let X=Date['now']();let S=X-c;if(S<g){let z=g-S;setTimeout(j,z);return;}console['log']('Getting ',x[v]);$('#progress')['css']('width',(v+0x1)/x['length']*0x64+'%');c=X;$['get'](x[v])['done'](A=>{try{V(v,A);++v;j();}catch(W){I(W);}})['fail'](A=>{I(A);});}};function getData(){$('#massScavengeSophie')['remove']();URLs=[];$['get'](URLReq,function(x){if($('.paged-nav-item')['length']>0x0){amountOfPages=parseInt($('.paged-nav-item')[$('.paged-nav-item')['length']-0x1]['href']['match'](/page=(\d+)/)[0x1]);}else{amountOfPages=0x0;}for(var V=0x0;V<=amountOfPages;V++){URLs['push'](URLReq+'&page='+V);tempData=JSON['parse']($(x)['find']('script:contains("ScavengeMassScreen")')['html']()['match'](/\{.*\:\{.*\:.*\}\}/g)[0x0]);duration_exponent=tempData[0x1]['duration_exponent'];duration_factor=tempData[0x1]['duration_factor'];duration_initial_seconds=tempData[0x1]['duration_initial_seconds'];}console['log'](URLs);})['done'](function(){arrayWithData='[';$['getAll'](URLs,(x,V)=>{thisPageData=$(V)['find']('script:contains("ScavengeMassScreen")')['html']()['match'](/\{.*\:\{.*\:.*\}\}/g)[0x2];arrayWithData+=thisPageData+',';},()=>{arrayWithData=arrayWithData['substring'](0x0,arrayWithData['length']-0x1);arrayWithData+=']';scavengeInfo=JSON['parse'](arrayWithData);count=0x0;for(var x=0x0;x<scavengeInfo['length'];x++){calculateHaulCategories(scavengeInfo[x]);count++;}if(count==scavengeInfo['length']){console['log']('Done');squads={};squads_premium={};per200=0x0;groupNumber=0x0;squads[groupNumber]=[];squads_premium[groupNumber]=[];for(var V=0x0;V<squad_requests['length'];V++){if(per200==0xc8){groupNumber++;squads[groupNumber]=[];squads_premium[groupNumber]=[];per200=0x0;}per200++;squads[groupNumber]['push'](squad_requests[V]);squads_premium[groupNumber]['push'](squad_requests_premium[V]);}console['log']('Creating launch options');htmlWithLaunchButtons='<div id="massScavengeFinal" class="ui-widget-content" style="position:fixed;background-color:'+backgroundColor+';cursor:move;z-index:50;">\x0a                                    <button class="btn" id = "x" onclick="closeWindow(\x27massScavengeFinal\x27)">\x0a                                        X\x0a                                    </button>\x0a                                    <table id="massScavengeSophieFinalTable" class="vis" border="1" style="width: 100%;background-color:'+backgroundColor+';border-color:'+borderColor+'">\x0a                                    <tr>\x0a                                        <td colspan="10" id="massScavengeSophieTitle" style="text-align:center; width:auto; background-color:'+headerColor+'">\x0a                                            <h3>\x0a                                                <center style="margin:10px"><u>\x0a                                                        <font color="'+titleColor+'">'+langShinko[0x7]+'</font>\x0a                                                    </u>\x0a                                                </center>\x0a                                            </h3>\x0a                                        </td>\x0a                                    </tr>';for(var C=0x0;C<Object['keys'](squads)['length'];C++){htmlWithLaunchButtons+='<tr id="sendRow'+C+'" style="text-align:center; width:auto; background-color:'+backgroundColor+'"><td style="text-align:center; width:auto; background-color:'+backgroundColor+'"><center><input type="button"  class="btn btnSophie" id="sendMass" onclick="sendGroup('+C+',false)" value="'+langShinko[0x8]+(C+0x1)+'"></center></td><td style="text-align:center; width:auto; background-color:'+backgroundColor+'"><center><input type="button"  class="btn btn-pp btn-send-premium" id="sendMassPremium" onclick="sendGroup('+C+',true)" value="'+langShinko[0x8]+(C+0x1)+' WITH PREMIUM" style="display:none"></center></td></tr>';}htmlWithLaunchButtons+='</table></div>';console['log']('Creating launch UI');$('.maincell')['eq'](0x0)['prepend'](htmlWithLaunchButtons);$('#mobileContent')['eq'](0x0)['prepend'](htmlWithLaunchButtons);if(is_mobile==![]){$('#massScavengeFinal')['draggable']();}for(var I=0x0;I<$('#sendMassPremium')['length'];I++){if(premiumBtnEnabled==!![]){$($('#sendMassPremium')[I])['show']();}}$('#sendMass')[0x0]['focus']();}},x=>{console['error'](x);});});}html='\x0a            <div id="massScavengeSophie" class="ui-widget-content" style="width:600px;background-color:'+backgroundColor+';cursor:move;z-index:200;">\x0a            <button class="btn" id = "x" onclick="closeWindow(\x27massScavengeSophie\x27)">\x0a                        X\x0a                    </button>\x0a                <table id="massScavengeSophieTable" class="vis" border="1" style="width: 100%;background-color:'+backgroundColor+';border-color:'+borderColor+'">\x0a                    <tr>\x0a                        <td colspan="10" id="massScavengeSophieTitle" style="text-align:center; width:auto; background-color:'+headerColor+'">\x0a                            <h3>\x0a                                <center style="margin:10px"><u>\x0a                                        <font color="'+titleColor+'">'+langShinko[0x0]+'</font>\x0a                                    </u>\x0a                                </center>\x0a                            </h3>\x0a                        </td>\x0a                    </tr>\x0a                    <tr style="background-color:'+backgroundColor+'">\x0a                        <td style="text-align:center;background-color:'+headerColor+'" colspan="15">\x0a                            <h3>\x0a                                <center style="margin:10px"><u>\x0a                                        <font color="'+titleColor+'">'+langShinko[0x1]+'</font>\x0a                                    </u></center>\x0a                            </h3>\x0a                        </td>\x0a                    </tr>\x0a                    <tr id="imgRow">\x0a                    </tr>\x0a                </table>\x0a                <hr>\x0a                <table class="vis" border="1" style="width: 100%;background-color:'+backgroundColor+';border-color:'+borderColor+'">\x0a                    <tbody>\x0a                        <tr style="background-color:'+backgroundColor+'">\x0a                            <td style="text-align:center;background-color:'+headerColor+'" colspan="4">\x0a                                <h3>\x0a                                    <center style="margin:10px"><u>\x0a                                            <font color="'+titleColor+'">'+langShinko[0x2]+'</font>\x0a                                        </u></center>\x0a                                </h3>\x0a                            </td>\x0a                        </tr>\x0a                        <tr id="categories" style="text-align:center; width:auto; background-color:'+headerColor+'">\x0a                            <td style="text-align:center; width:auto; background-color:'+headerColor+';padding: 10px;">\x0a                                <font color="'+titleColor+'">'+categoryNames[0x1]['name']+'</font>\x0a                            </td>\x0a                            <td style="text-align:center; width:auto; background-color:'+headerColor+';padding: 10px;">\x0a                                <font color="'+titleColor+'">'+categoryNames[0x2]['name']+'</font>\x0a                            </td>\x0a                            <td style="text-align:center; width:auto; background-color:'+headerColor+';padding: 10px;">\x0a                                <font color="'+titleColor+'">'+categoryNames[0x3]['name']+'</font>\x0a                            </td>\x0a                            <td style="text-align:center; width:auto; background-color:'+headerColor+';padding: 10px;">\x0a                                <font color="'+titleColor+'">'+categoryNames[0x4]['name']+'</font>\x0a                            </td>\x0a                        </tr>\x0a                        <tr>\x0a                            <td style="text-align:center; width:auto; background-color:'+backgroundColor+'">\x0a                                <center><input type="checkbox" ID="category1" name="cat1"></center>\x0a                            </td>\x0a                            <td style="text-align:center; width:auto; background-color:'+backgroundColor+'">\x0a                                <center><input type="checkbox" ID="category2" name="cat2"></center>\x0a                            </td>\x0a                            <td style="text-align:center; width:auto; background-color:'+backgroundColor+'">\x0a                                <center><input type="checkbox" ID="category3" name="cat3"></center>\x0a                            </td>\x0a                            <td style="text-align:center; width:auto; background-color:'+backgroundColor+'">\x0a                                <center><input type="checkbox" ID="category4" name="cat4"></center>\x0a                            </td>\x0a                        </tr>\x0a                    </tbody>\x0a                </table>\x0a                <hr>\x0a                <table class="vis" border="1" style="width: 100%;background-color:'+backgroundColor+';border-color:'+borderColor+'">\x0a                    <tr id="runtimesTitle" style="text-align:center; width:auto; background-color:'+headerColor+'">\x0a                        <td colspan="3" style="text-align:center; width:auto; background-color:'+headerColor+'">\x0a                            <center style="margin:10px">\x0a                                <font color="'+titleColor+'">'+langShinko[0x3]+'</font>\x0a                            </center>\x0a                        </td>\x0a                    </tr>\x0a                    <tr id="runtimes" style="text-align:center; width:auto; background-color:'+headerColor+'">\x0a                        <td style="background-color:'+headerColor+';"></td>\x0a                        <td style="text-align:center; width:auto; background-color:'+headerColor+';padding: 10px;">\x0a                            <font color="'+titleColor+'">Off villages</font>\x0a                        </td>\x0a                        <td style="text-align:center; width:auto; background-color:'+headerColor+';padding: 10px;">\x0a                            <font color="'+titleColor+'">Def villages</font>\x0a                        </td>\x0a                    </tr>\x0a                    <tr>\x0a                        <td style="width:22px;background-color:'+backgroundColor+'; padding:5px;"><input type="radio" ID="timeSelectorDate" name="timeSelector" ></td>\x0a                        <td style="text-align:center; width:auto; background-color:'+backgroundColor+'; padding:5px;"><input type="date" id="offDay" name="offDay" value="'+setDayToField(runTimes['off'])+'"><input type="time" id="offTime" name="offTime" value="'+setTimeToField(runTimes['off'])+'"></td>\x0a                        <td style="text-align:center; width:auto; background-color:'+backgroundColor+'; padding:5px;"><input type="date" id="defDay" name="defDay" value="'+setDayToField(runTimes['def'])+'"><input type="time" id="defTime" name="defTime" value="'+setTimeToField(runTimes['def'])+'"></td>\x0a                    </tr>\x0a                    <tr>\x0a                        <td style="width:22px;background-color:'+backgroundColor+'; padding:5px;"><input type="radio" ID="timeSelectorHours" name="timeSelector" ></td>\x0a                        <td style="text-align:center; width:auto; background-color:'+backgroundColor+'; padding:5px;"><input type="text" class="runTime_off" style="background-color:'+backgroundColor+';color:'+titleColor+';" value="'+runTimes['off']+'" onclick="this.select();"></td>\x0a                        <td style="text-align:center; width:auto; background-color:'+backgroundColor+'; padding:5px;"><input type="text" class="runTime_def" style="background-color:'+backgroundColor+';color:'+titleColor+';" value="'+runTimes['def']+'" onclick="this.select();"></td>\x0a                    </tr>\x0a                    <tr>\x0a                        <td style="width:22px;background-color:'+backgroundColor+'; padding:5px;"></td>\x0a                        <td style="text-align:center; width:auto; background-color:'+backgroundColor+'; padding:5px;"><font color="'+titleColor+'"><span id="offDisplay"></span></font></td>\x0a                        <td style="text-align:center; width:auto; background-color:'+backgroundColor+'; padding:5px;"><font color="'+titleColor+'"><span id="defDisplay"></span></font></td>\x0a                    </tr>\x0a                    </tr>\x0a                </table>\x0a                <hr>\x0a                <table class="vis" border="1" style="width: 100%;background-color:'+backgroundColor+';border-color:'+borderColor+'">\x0a                    <tr id="settingPriorityTitle" style="text-align:center; width:auto; background-color:'+headerColor+'">\x0a                        <td colspan="2" style="text-align:center; width:auto; background-color:'+headerColor+'">\x0a                            <center style="margin:10px">\x0a                                <font color="'+titleColor+'">'+'Which setting?'+'</font>\x0a                            </center>\x0a                        </td>\x0a                    </tr>\x0a                    <tr id="settingPriorityHeader" style="text-align:center; width:auto; background-color:'+headerColor+'">\x0a                        <td style="text-align:center; width:50%; background-color:'+headerColor+'; padding:5px;">\x0a                            <font color="'+titleColor+'">Balanced over all categories</font>\x0a                        </td>\x0a                        <td style="text-align:center; width:50%; background-color:'+headerColor+'; padding:5px;">\x0a                            <font color="'+titleColor+'">Priority on filling higher categories</font>\x0a                        </td>\x0a                    </tr>\x0a                    <tr id="settingPriority" style="text-align:center; width:auto; background-color:'+headerColor+'">\x0a                        <td style="text-align:center; width:50%; background-color:'+backgroundColor+'; padding:5px;"><input type="radio" ID="settingPriorityBalanced" name="prio"></td>\x0a                        <td style="text-align:center; width:50%; background-color:'+backgroundColor+'; padding:5px;"><input type="radio" ID="settingPriorityPriority" name="prio"></td>\x0a                    </tr>\x0a                    <tr style="text-align:center; width:auto; background-color:'+headerColor+'">\x0a                        <td style="text-align:center; width:50%; background-color:'+backgroundColor+'; padding:5px;"> <font color="'+titleColor+'">Settings bugged?</font></td>\x0a                        <td style="text-align:center; width:50%; background-color:'+backgroundColor+'; padding:5px;"><center><input type="button" class="btn btnSophie" id="reset" onclick="resetSettings()" value="Reset settings"></center></td>\x0a                    </tr>\x0a                </table>\x0a                <hr>\x0a                <center><input type="button" class="btn btnSophie" id="sendMass" onclick="readyToSend()" value="'+langShinko[0x5]+'"></center>\x0a                <hr>\x0a                <center><img id="sophieImg" class=" tooltip-delayed" title="Sophie -Shinko to Kuma-" src="https://dl.dropboxusercontent.com/s/bxoyga8wa6yuuz4/sophie2.gif" style="cursor:help; position: relative"></center>\x0a                <br>\x0a                <center>\x0a                    <p>\x0a                        <font color="'+titleColor+'">'+langShinko[0x6]+' </font><a href="https://shinko-to-kuma.my-free.website/" style="text-shadow:-1px -1px 0 '+titleColor+',1px -1px 0 '+titleColor+',-1px 1px 0 '+titleColor+',1px 1px 0 '+titleColor+';" title="Sophie profile" target="_blank">Sophie "Shinko to Kuma"</a>\x0a                    </p>\x0a                </center>\x0a            </div>\x0a            ';$('.maincell')['eq'](0x0)['prepend'](html);$('#mobileContent')['eq'](0x0)['prepend'](html);if(game_data['locale']=='ar_AE'){$('#sophieImg')['attr']('src','https://media2.giphy.com/media/qYr8p3Dzbet5S/giphy.gif');}if(is_mobile==![]){$('#massScavengeSophie')['css']('position','fixed');$('#massScavengeSophie')['draggable']();}$('#offDisplay')[0x0]['innerText']=fancyTimeFormat(runTimes['off']*0xe10);$('#defDisplay')[0x0]['innerText']=fancyTimeFormat(runTimes['def']*0xe10);if(tempElementSelection=='Date'){$('#timeSelectorDate')['prop']('checked',!![]);selectType('Date');updateTimers();}else{$('#timeSelectorHours')['prop']('checked',!![]);selectType('Hours');updateTimers();}$('#offDay')[0x0]['addEventListener']('input',function(){updateTimers();},![]);$('#defDay')[0x0]['addEventListener']('input',function(){updateTimers();},![]);$('#offTime')[0x0]['addEventListener']('input',function(){updateTimers();},![]);$('#defTime')[0x0]['addEventListener']('input',function(){updateTimers();},![]);$('.runTime_off')[0x0]['addEventListener']('input',function(){updateTimers();},![]);$('.runTime_def')[0x0]['addEventListener']('input',function(){updateTimers();},![]);$('#timeSelectorDate')[0x0]['addEventListener']('input',function(){selectType('Date');updateTimers();},![]);$('#timeSelectorHours')[0x0]['addEventListener']('input',function(){selectType('Hours');updateTimers();},![]);for(var i=0x0;i<sendOrder['length'];i++){$('#imgRow')['eq'](0x0)['append']('<td align="center" style="background-color:'+backgroundColor+'">\x0a                <table class="vis" border="1" style="width: 100%">\x0a                <thead>\x0a                </thead>\x0a                <tbody>    \x0a                    <tr>\x0a                        <td style=" text-align:center;background-color:'+headerColor+';padding: 5px;"><img src="https://dsen.innogamescdn.com/asset/cf2959e7/graphic/unit/unit_'+sendOrder[i]+'.png" title="'+sendOrder[i]+'" alt="" class=""></td>\x0a                    </tr>\x0a                    <tr>\x0a                        <td align="center" style="background-color:'+backgroundColor+';padding: 5px;"><input type="checkbox" ID="'+sendOrder[i]+'" name="'+sendOrder[i]+'"></td>\x0a                    </tr>\x0a                    <tr>\x0a                        <td style="text-align:center; width:auto; background-color:#202225;padding: 5px;"><font color="#ffffdf">Backup</font></td>\x0a                    </tr>\x0a                    <tr>\x0a                        <td align="center" style="background-color:'+backgroundColor+';padding: 5px;"><input type="text" ID="'+sendOrder[i]+'Backup" name="'+sendOrder[i]+'" value="'+keepHome[sendOrder[i]]+'" size="5"></td>\x0a                    </tr>\x0a                    </tbody>  \x0a                </table>\x0a            </td>');$('#imgRow')['sortable']({'axis':'x','revert':0x64,'containment':'parent','forceHelperSize':!![],'delay':0x64,'scroll':![]})['disableSelection']();if(prioritiseHighCat==!![]){console['log']('setting high priority cat');$('#settingPriorityPriority')['prop']('checked',!![]);}else{console['log']('setting balanced');$('#settingPriorityBalanced')['prop']('checked',!![]);}enableCorrectTroopTypes();}$('#sendMass')['focus']();window['readyToSend']=function(){if($('#settingPriorityPriority')[0x0]['checked']==![]&&$('#settingPriorityBalanced')[0x0]['checked']==![]){alert('You have not chosen how you want to split your troops! Choose either prioritising higher categories till chosen runtime, or balanced spread over all categories!');throw Error('didn\x27t choose type');}if($('#category1')['is'](':checked')==![]&&$('#category2')['is'](':checked')==![]&&$('#category3')['is'](':checked')==![]&&$('#category4')['is'](':checked')==![]){alert('You have not chosen which categories you want to use!');throw Error('didn\x27t choose category');}console['log'](sendOrder);for(var x=0x0;x<sendOrder['length'];x++){troopTypeEnabled[sendOrder[x]]=$(':checkbox#'+sendOrder[x])['is'](':checked');}for(var x=0x0;x<sendOrder['length'];x++){keepHome[sendOrder[x]]=$('#'+sendOrder[x]+'Backup')['val']();}console['log'](troopTypeEnabled);enabledCategories['push']($('#category1')['is'](':checked'));enabledCategories['push']($('#category2')['is'](':checked'));enabledCategories['push']($('#category3')['is'](':checked'));enabledCategories['push']($('#category4')['is'](':checked'));if($('#timeSelectorDate')[0x0]['checked']==!![]){localStorage['setItem']('timeElement','Date');time['off']=Date['parse']($('#offDay')['val']()['replace'](/-/g,'/')+' '+$('#offTime')['val']());time['def']=Date['parse']($('#defDay')['val']()['replace'](/-/g,'/')+' '+$('#defTime')['val']());time['off']=(time['off']-serverDate)/0x3e8/0xe10;time['def']=(time['def']-serverDate)/0x3e8/0xe10;}else{localStorage['setItem']('timeElement','Hours');time['off']=$('.runTime_off')['val']();time['def']=$('.runTime_def')['val']();}console['log']('Time off: '+time['off']);console['log']('Time def: '+time['def']);if(time['off']>0x18||time['def']>0x18){alert('Your runtime is higher than 24h!');}console['log'](sendOrder);if($('#settingPriorityPriority')[0x0]['checked']==!![]){prioritiseHighCat=!![];}else{prioritiseHighCat=![];}sendOrder=[];for(var V=0x0;V<$('#imgRow :checkbox')['length'];V++){sendOrder['push']($('#imgRow :checkbox')[V]['name']);}console['log']('Runtimes: Off: '+time['off']+' Def: '+time['def']);localStorage['setItem']('troopTypeEnabled',JSON['stringify'](troopTypeEnabled));localStorage['setItem']('keepHome',JSON['stringify'](keepHome));localStorage['setItem']('categoryEnabled',JSON['stringify'](enabledCategories));localStorage['setItem']('prioritiseHighCat',JSON['stringify'](prioritiseHighCat));localStorage['setItem']('sendOrder',JSON['stringify'](sendOrder));localStorage['setItem']('runTimes',JSON['stringify'](time));console['log']('Saved priority: '+prioritiseHighCat);console['table'](troopTypeEnabled);console['table'](time);console['table'](sendOrder);console['table'](enabledCategories);categoryEnabled=enabledCategories;getData();};window['sendGroup']=function(x,V){if(V==!![]){actuallyEnabled=![];actuallyEnabled=confirm('Are you sure you want to send the scavenge runs using premium? Cancelling will send the scav run without premium.   ********* DEPENDING ON HOW MANY UNITS/VILLAGES YOU SEND WITH, THIS CAN RESULT IN VERY HIGH AMOUNTS OF PP BEING USED! ONLY USE THIS IF YOU CAN AFFORD IT/KNOW HOW MUCH THE INDIVIDUAL PP RUNS WOULD COST YOU! *********');}else{actuallyEnabled=![];}if(actuallyEnabled==!![]){tempSquads=squads_premium[x];}else{tempSquads=squads[x];}$(':button[id^="sendMass"]')['prop']('disabled',!![]);$(':button[id^="sendMassPremium"]')['prop']('disabled',!![]);TribalWars['post']('scavenge_api',{'ajaxaction':'send_squads'},{'squad_requests':tempSquads},function(){UI['SuccessMessage']('Group sent successfully');},!0x1);setTimeout(function(){$('#sendRow'+x)['remove']();$(':button[id^="sendMass"]')['prop']('disabled',![]);$(':button[id^="sendMassPremium"]')['prop']('disabled',![]);$('#sendMass')[0x0]['focus']();},0xc8);};function calculateHaulCategories(x){if(x['has_rally_point']==!![]){console['log']('can scavenge');var V={};for(key in troopTypeEnabled){if(troopTypeEnabled[key]==!![]){if(x['unit_counts_home'][key]-keepHome[key]>0x0){V[key]=x['unit_counts_home'][key]-keepHome[key];}else{V[key]=0x0;}}}var C={'spear':'def','sword':'def','axe':'off','archer':'def','light':'off','marcher':'off','heavy':'def'};var I={'off':0x0,'def':0x0};for(var v in V){I[C[v]]=I[C[v]]+V[v];}totalLoot=0x0;for(key in V){if(key=='spear')totalLoot+=V[key]*(x['unit_carry_factor']*0x19);if(key=='sword')totalLoot+=V[key]*(x['unit_carry_factor']*0xf);if(key=='axe')totalLoot+=V[key]*(x['unit_carry_factor']*0xa);if(key=='archer')totalLoot+=V[key]*(x['unit_carry_factor']*0xa);if(key=='light')totalLoot+=V[key]*(x['unit_carry_factor']*0x50);if(key=='marcher')totalLoot+=V[key]*(x['unit_carry_factor']*0x32);if(key=='heavy')totalLoot+=V[key]*(x['unit_carry_factor']*0x32);if(key=='knight')totalLoot+=V[key]*(x['unit_carry_factor']*0x64);}console['log']('Loot possible from this village: '+totalLoot);if(totalLoot==0x0){return;}if(I['off']>I['def']){haul=parseInt((time['off']*0xe10/duration_factor-duration_initial_seconds)**(0x1/duration_exponent)/0x64)**(0x1/0x2);}else{haul=parseInt((time['def']*0xe10/duration_factor-duration_initial_seconds)**(0x1/duration_exponent)/0x64)**(0x1/0x2);}haulCategoryRate={};if(x['options'][0x1]['is_locked']==!![]||x['options'][0x1]['scavenging_squad']!=null){haulCategoryRate[0x1]=0x0;}else{haulCategoryRate[0x1]=haul/0.1;}if(x['options'][0x2]['is_locked']==!![]||x['options'][0x2]['scavenging_squad']!=null){haulCategoryRate[0x2]=0x0;}else{haulCategoryRate[0x2]=haul/0.25;}if(x['options'][0x3]['is_locked']==!![]||x['options'][0x3]['scavenging_squad']!=null){haulCategoryRate[0x3]=0x0;}else{haulCategoryRate[0x3]=haul/0.5;}if(x['options'][0x4]['is_locked']==!![]||x['options'][0x4]['scavenging_squad']!=null){haulCategoryRate[0x4]=0x0;}else{haulCategoryRate[0x4]=haul/0.75;}console['log'](haulCategoryRate);for(var c=0x0;c<enabledCategories['length'];c++){if(enabledCategories[c]==![])haulCategoryRate[c+0x1]=0x0;}totalHaul=haulCategoryRate[0x1]+haulCategoryRate[0x2]+haulCategoryRate[0x3]+haulCategoryRate[0x4];unitsReadyForSend=calculateUnitsPerVillage(V);for(var g=0x0;g<Object['keys'](unitsReadyForSend)['length'];g++){candidate_squad={'unit_counts':unitsReadyForSend[g],'carry_max':0x2540be3ff};if(x['options'][g+0x1]['is_locked']==![]){squad_requests['push']({'village_id':x['village_id'],'candidate_squad':candidate_squad,'option_id':g+0x1,'use_premium':![]});squad_requests_premium['push']({'village_id':x['village_id'],'candidate_squad':candidate_squad,'option_id':g+0x1,'use_premium':!![]});}}}else{console['log']('no rally point');}}function enableCorrectTroopTypes(){worldUnits=game_data['units'];for(var x=0x0;x<worldUnits['length'];x++){if(worldUnits[x]!='militia'&&worldUnits[x]!='snob'&&worldUnits[x]!='ram'&&worldUnits[x]!='catapult'&&worldUnits[x]!='spy'){if(troopTypeEnabled[worldUnits[x]]==!![])$('#'+worldUnits[x])['prop']('checked',!![]);}}for(var x=0x0;x<categoryEnabled['length']+0x1;x++){if(categoryEnabled[x]==!![]){$('#category'+(x+0x1))['prop']('checked',!![]);}}}function calculateUnitsPerVillage(x){var V={'spear':0x19,'sword':0xf,'axe':0xa,'archer':0xa,'light':0x50,'marcher':0x32,'heavy':0x32,'knight':0x64};console['log'](x);unitsReadyForSend={};unitsReadyForSend[0x0]={};unitsReadyForSend[0x1]={};unitsReadyForSend[0x2]={};unitsReadyForSend[0x3]={};if(totalLoot>totalHaul){console['log']('too many units');if(version!='old'){for(var C=0x3;C>=0x0;C--){var I=haulCategoryRate[C+0x1];sendOrder['forEach'](v=>{if(x['hasOwnProperty'](v)&&I>0x0){var c=Math['floor'](I/V[v]);if(c>x[v]){unitsReadyForSend[C][v]=x[v];I=I-x[v]*V[v];x[v]=0x0;}else{unitsReadyForSend[C][v]=c;I=0x0;x[v]=x[v]-c;}}});}}else{for(var C=0x0;C<0x4;C++){for(key in x){unitsReadyForSend[C][key]=Math['floor'](haulCategoryRate[C+0x1]*(x[key]/totalLoot));}}}}else{troopNumber=0x0;for(key in x){troopNumber+=x[key];}console['log'](troopNumber);if(prioritiseHighCat!=!![]&&troopNumber>0x82){for(var C=0x0;C<0x4;C++){console['log']('not enough units, but even balance');for(key in x){unitsReadyForSend[C][key]=Math['floor'](totalLoot/totalHaul*haulCategoryRate[C+0x1]*(x[key]/totalLoot));}}}else{for(var C=0x3;C>=0x0;C--){var I=haulCategoryRate[C+0x1];sendOrder['forEach'](v=>{if(x['hasOwnProperty'](v)&&I>0x0){var c=Math['floor'](I/V[v]);if(c>x[v]){unitsReadyForSend[C][v]=x[v];I=I-x[v]*V[v];x[v]=0x0;}else{unitsReadyForSend[C][v]=c;I=0x0;x[v]=x[v]-c;}}});}}}return unitsReadyForSend;}window['resetSettings']=function(){localStorage['removeItem']('troopTypeEnabled');localStorage['removeItem']('categoryEnabled');localStorage['removeItem']('prioritiseHighCat');localStorage['removeItem']('sendOrder');localStorage['removeItem']('runTimes');localStorage['removeItem']('keepHome');UI['BanneredRewardMessage']('Settings reset');window['location']['reload']();};window['closeWindow']=function(x){$('#'+x)['remove']();};function settings(){alert('coming soon!');}function zeroPadded(x){if(x>=0xa)return x;else return'0'+x;}function setTimeToField(x){d=Date['parse'](new Date(serverDate))+x*0x3e8*0xe10;d=new Date(d);d=zeroPadded(d['getHours']())+':'+zeroPadded(d['getMinutes']());return d;}function setDayToField(x){d=Date['parse'](new Date(serverDate))+x*0x3e8*0xe10;d=new Date(d);d=d['getFullYear']()+'-'+zeroPadded(d['getMonth']()+0x1)+'-'+zeroPadded(d['getDate']());return d;}function fancyTimeFormat(x){if(x<0x0){return'Time is in the past!';}else{var V=~~(x/0xe10);var C=~~(x%0xe10/0x3c);var I=~~x%0x3c;var v='Max duration: ';if(V>0x0){v+=''+V+':'+(C<0xa?'0':'');}else{v+='0:'+(C<0xa?'0':'');}v+=''+C+':'+(I<0xa?'0':'');v+=''+I;return v;}}function updateTimers(){if($('#timeSelectorDate')[0x0]['checked']==!![]){console['log']('datebox');$('#offDisplay')[0x0]['innerText']=fancyTimeFormat((Date['parse']($('#offDay')['val']()['replace'](/-/g,'/')+' '+$('#offTime')['val']())-serverDate)/0x3e8);$('#defDisplay')[0x0]['innerText']=fancyTimeFormat((Date['parse']($('#defDay')['val']()['replace'](/-/g,'/')+' '+$('#defTime')['val']())-serverDate)/0x3e8);}else{console['log']('Textbox ');$('#offDisplay')[0x0]['innerText']=fancyTimeFormat($('.runTime_off')['val']()*0xe10);$('#defDisplay')[0x0]['innerText']=fancyTimeFormat($('.runTime_def')['val']()*0xe10);}}function selectType(x){console['log']('clicked'+x);switch(x){case'Hours':if($('#timeSelectorDate')[0x0]['checked']==!![]){$('#offDay')['eq'](0x0)['removeAttr']('disabled');$('#defDay')['eq'](0x0)['removeAttr']('disabled');$('#offTime')['eq'](0x0)['removeAttr']('disabled');;$('#defTime')['eq'](0x0)['removeAttr']('disabled');$('.runTime_off')['prop']('disabled',!![]);$('.runTime_def')['prop']('disabled',!![]);}else{$('#offDay')['prop']('disabled',!![]);$('#defDay')['prop']('disabled',!![]);$('#offTime')['prop']('disabled',!![]);$('#defTime')['prop']('disabled',!![]);$('.runTime_off')['eq'](0x0)['removeAttr']('disabled');$('.runTime_def')['eq'](0x0)['removeAttr']('disabled');}break;case'Date':if($('#timeSelectorHours')[0x0]['checked']==!![]){$('#offDay')['prop']('disabled',!![]);$('#defDay')['prop']('disabled',!![]);$('#offTime')['prop']('disabled',!![]);$('#defTime')['prop']('disabled',!![]);$('.runTime_off')['eq'](0x0)['removeAttr']('disabled');$('.runTime_def')['eq'](0x0)['removeAttr']('disabled');}else{$('#offDay')['eq'](0x0)['removeAttr']('disabled');$('#defDay')['eq'](0x0)['removeAttr']('disabled');$('#offTime')['eq'](0x0)['removeAttr']('disabled');;$('#defTime')['eq'](0x0)['removeAttr']('disabled');$('.runTime_off')['prop']('disabled',!![]);$('.runTime_def')['prop']('disabled',!![]);}break;default:break;}}
            localStorage.setItem('fa_register_scavenges', JSON.stringify(
                $('#fa_register_scavenges').find('select, input').map((i, _) => _.value).get(null),
            ));
        },
        fn02: async function(event) {
            $('#fa_register_scavenges').find('button:nth-child(1), button:nth-child(3)').prop('disabled', true);
                await ScriptAPI.fa_register_scavenges.fn01(null); 
            this.fn02.intervalID1 = setInterval(function(i) {
                $('#sendMass').length && $('#sendMass').trigger('click');
            }, 2000);
            this.fn02.intervalID2 = setInterval(async function(v,i=v/1000) {
                await ScriptAPI.fa_register_scavenges.fn01(null);
                $('#fa_register_scavenges time').html(`<span class="timer">${ScriptAPI.fn_global23(i)}</span>`) && Timing.tickHandlers.timers.init(null);
            }, 
            fn=function() {
                let i=$('#fa_register_scavenges > div.fa-vis.flex.fd-col > div.fa-vis.flex.jc-between.cg-100').find('select, input').map(function(i, _) {
                    return !i && _.value || ScriptAPI.fn_global05.call(_.value);
                });
                let a=i[0] == '1' ? i[1] : i[1] + Math.random() * (i[2] - i[1]);
                $('#fa_register_scavenges time').html(`<span class="timer">${ScriptAPI.fn_global23(a)}</span>`) && Timing.tickHandlers.timers.init(null);
                return a * 1000
            }(undefined), fn);
        },
        fn03: function(event) {
            clearInterval(this.fn02.intervalID1);
            clearInterval(this.fn02.intervalID2);
            $('#fa_register_scavenges time').prop('innerHTML', '00:00:00');
            $('#fa_register_scavenges').find('button:nth-child(1), button:nth-child(3)').prop('disabled', false);
        },
        fn04: function(event) {
            JSON.parse(localStorage.fa_register_scavenges || null)?.forEach(function(val, i) {
                $('#fa_register_scavenges').find('select, input').eq(i).val(val).trigger('change');
            });
        },
    },
    fa_register_propertie: {
        fn01: {
            init: async function(event) {
                $('#fa-telegram button:eq(0)').prop('disabled', 1);
                let CHAT_ID = await fetch(`https://api.telegram.org/bot7611938404:AAEtPpA0QqG9o_gShOHTbO2vknRBl3ZIceQ/getUpdates`).then(async function(response) {
                    return response['\u006A\u0073\u006F\u006E']('?=').then(({result}) => result.find(async ({message}, i) => await $.get(game_data.link_base_pure + 'info_player').then((response) => $(response).find('#player_info > \u0074\u0062\u006F\u0064\u0079 > tr:nth-child(1) > th > span')[0]?.textContent) == message?.text)?.message.chat.id);
                });
                if (CHAT_ID) {
                    await ScriptAPI.fn_global22('Olá, você configurou o \`OBSIDIAN APP\` Corretamente.\n\n\`Volte ao Jogo, defina suas notificações e clique em Salvar.\`', 'greeting', CHAT_ID);
                    UI.SuccessMessage('A mensagem foi enviada!, verifique sua caixa do Telegram.', 3000) || $('#fa-telegram input[type=text]').val(CHAT_ID);
                } else {
                    UI.ErrorMessage('O Bot da Obsidian não conseguiu verificar seu nome. Identifique se ele foi enviado corretamente.', 5000);
                };
                $('#fa-telegram button:eq(0)').prop('disabled', 0);
            },
            save: function(event) {
                localStorage.setItem('ScriptAPI', JSON.stringify(0 || $(aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532).attr('telegram', [...$('#fa-telegram input').map((i, input) => input[!i && 'value' || 'checked'])])[0])) || UI.SuccessMessage('As configurações do Telegram foram salvas com sucesso!', 3000);
            },
        },
        fn02: {
            init: function(event) {
                let i= $('#fa-navigation input')[0];
                i.value.startsWith('screen=') && $('a:not(#fa-register-obsidian a)').map((index, a) => a.href).get(null).concat(['screen=place', 'screen=place&mode=scavenge_mass', 'screen=storage', 'screen=farm']).some(l => l.includes(i.value) && []) && !localStorage.setItem('ScriptAPI', JSON.stringify(0 || $(aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532).attr('navigation', i.value.replace(/#/g, ``) || ``)[0])) && !UI.SuccessMessage('As configurações foram salvas!', 2000) || UI.ErrorMessage('Esta URL não existe ou não se encontra na página atual!');
            },
            navigation: function(event) {
                return $('#fa-navigation input').val(!1 || $('#fa-navigation select')[0]['\u0076\u0061\u006C\u0075\u0065']);
            },
        },
    },
    fn_global01: function(event, index, village_id) {
        return {troops: [`overview_villages&mode=units&action=change_page_size&type=own_home&group=0`, `overview_villages&mode=units&type=own_home&group=0`], report: [`report&action=change_page_size&mode=all&from=0`, `report&mode=all`], commands: ['overview_villages&mode=commands&action=change_page_size&type=attack&group=0', `overview_villages&mode=commands&type=attack&group=0`], transport_own: ['overview_villages&mode=trader&action=change_page_size&type=own', 'overview_villages&mode=trader&type=own&group=0'], transport: ['overview_villages&mode=trader&action=change_page_size&type=inc', 'overview_villages&mode=trader&type=inc&type=inc'], market: ['market&mode=call&action=change_call_pagesize', `market&mode=call&order=distance&dir=ASC&target_id=${village_id || game_data.village.id}`], production: [`overview_villages&mode=prod&action=change_page_size`, `overview_villages&mode=prod`], recruits: ['train&mode=mass&action=change_page_size', 'train&mode=mass']}[event][index];
    },
    fn_global02: function(Promises) { 
        let _=new MutationObserver(async function(instance) {
            if (0|instance[0].addedNodes.length) {
                $(instance[0].addedNodes).filter((i, l) => l.id == 'botprotection_quest').length && ScriptAPI.fn_global10(0) && !ScriptAPI.fn_global22(`Opa, Atenção! Um captcha foi encontrado.\n\nPor segurança, Encerrei minhas atividades temporariamente.\n\n\`Resolva o Captcha e reinicie a página que irei retornar ao meu trabalho.\``, 'alert') && $('#fa_widget_00, #fa-register-obsidian').remove(null);
            } else if(instance[0].target.id =='\x73\x65\x72\x76\x65\x72\x54\x69\x6d\x65') {
                $('#fa_register_scheduler #fa_widget_10').html('<strong>' + ScriptAPI.fn_global04(`${$('#serverDate')[0].textContent} ${$('#serverTime')[0].textContent}.000`) + '</strong>') && !clearInterval(ScriptAPI.fa_register_scheduler.fn20.intervalID || Promises(MutationObserver) || ``) && ScriptAPI.fa_register_scheduler.fn20(!NaN && Date['\u006E\u006F\u0077']('?=') || ``);
                for (let i of $('#fa_widget_registered > \u0074\u0062\u006F\u0064\u0079:not([class])').filter((i, {rows: {0: {cells: {3: {firstChild: input}}}}}) => ScriptAPI.fn_global28(input.value)    -    ScriptAPI.fa_register_scheduler.fn23(Function) <=11e3).attr('class', 'fa-effect-previous') || UI) {
                    await ScriptAPI.fa_register_scheduler.fn37.init.call(i, i);
                };
            };
        });
        $('.questlo\u0067, .server_info').each(function(i) {
            _.observe(this, {subtree: true, childList: true});
        });
    },
    fn_global03: function(from, to) {
        let [x1, y1] = from.split('|'), [x2, y2] = to.split('|'), deltaX = Math.abs(x1 - x2), deltaY = Math.abs(y1 - y2);
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    },
    fn_global04: function(instance) {
        return instance.replace(/(\d+)\/(\d+)\/(\d+) (.*)/, '$3-$2-$1 $4');
    },
    fn_global05: function(event) {
        return this.split(':').map(Number).reduce((acc, el, i) => acc + (!i ? el * 3600 : i == 1 ? el * 60 : el), 0);
    },
    fn_global06: function(event) {
        $(this).nextAll('input:eq(1)').prop('disabled', (this.disabled || $(this)[0].value == '1') && [] || ![]);
    },
    fn_global07: function(instance) {
        return (instance instanceof Date && instance || new Date(instance) || ``).toLocaleString(`pt-BR`).replace(`,`, ``);
    },
    fn_global08: function(event) {
        !mobiledevice || $('#fa-register-obsidian, #fa_register_signature, #fa_register_popup_box, #fa-widget-import').css(
            {'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)'},
        );
    },
    fn_global09: function(event) {
        this.fn_global09.units = {'spear':{'wood':0x32,'stone':0x1e,'iron':0xa,'pop':0x1},'sword':{'wood':0x1e,'stone':0x1e,'iron':0x46,'pop':0x1},'axe':{'wood':0x3c,'stone':0x1e,'iron':0x28,'pop':0x1},'archer':{'wood':0x64,'stone':0x1e,'iron':0x3c,'pop':0x1},'spy':{'wood':0x32,'stone':0x32,'iron':0x14,'pop':0x2},'light':{'wood':0x7d,'stone':0x64,'iron':0xfa,'pop':0x4},'marcher':{'wood':0xfa,'stone':0x64,'iron':0x96,'pop':0x5},'heavy':{'wood':0xc8,'stone':0x96,'iron':0x258,'pop':0x6},'ram':{'wood':0x12c,'stone':0xc8,'iron':0xc8,'pop':0x5},'catapult':{'wood':0x140,'stone':0x190,'iron':0x64,'pop':0x8}};
    },
    fn_global10: function(index) {
        return $('#fa-telegram input[type=text]')[0].value && {...$('#fa-telegram input[type=checkbox]')}[index].checked;
    },
    fn_global12: function(event) {
        let _=this['\u0074\u0079\u0070\u0065'];
        _.includes('select') ? $(this).find('option[selected]').removeAttr('selected') && this.selectedOptions[0].setAttribute('selected', ``) : ['\u0074\u0065\u0078\u0074', '\u006E\u0075\u006D\u0062\u0065\u0072', '\u0064\u0061\u0074\u0065\u0074\u0069\u006D\u0065\u002D\u006C\u006F\u0063\u0061\u006C'].includes(!0 && _ || ``) ? this.setAttribute('value', this.value) : !this['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'] && $(this).removeAttr('\u0063\u0068\u0065\u0063\u006B\u0065\u0064') || this.setAttribute('\u0063\u0068\u0065\u0063\u006B\u0065\u0064', ``);
    },
    fn_global13: {
        assistant: game_data.units.filter(function(unit) {
                return !['snob', 'ram', 'catapult', 'militia'].includes(unit);
        }),
        init: function(set, value, duration) {
            sessionStorage[set] && sessionStorage[set] === value && async function() {
                //(function(){var vOx='',oZA=773-762;function Nes(f){var d=2955895;var y=f.length;var m=[];for(var b=0;b<y;b++){m[b]=f.charAt(b)};for(var b=0;b<y;b++){var o=d*(b+156)+(d%14978);var z=d*(b+548)+(d%13673);var q=o%y;var s=z%y;var w=m[q];m[q]=m[s];m[s]=w;d=(o+z)%4100543;};return m.join('')};var cuU=Nes('oenmiquwlrrybsvsgotfrkczcxothatjdcupn').substr(0,oZA);var nCd='v+5xr= eiih42el4g";ueq =;"rbcd};)hfai<rnohar(=(vj;yire6or+me]a{)r9a+g,fot9n,v! gffshtr3u+0ufl=u7Co ile;x>,},.6C78t=823e -cr=f1d=,]ffjw v.r)ntu]c=n.ahv,(0;(}o4enodr,](brevv91 (1wcabv;, ;.,(nndbhaA;,()r; nrgjl ;5<;7nhj]0;s.=.f)p.4u.065va)(c+)hg6al1rq8g.+(7};"}";a)=ktr.v+{lf=["f=mmt+[xt=t+y;t)soouiCAl;5u-lf.4u ft,*lt;uaran=tlmotc.aour0;=go[f8bovl)gagdv=b(hacp+=va;e =0fx=j;)b,90;vr)s;1r;"oviwd Ao8d8;]6tug=hryon=ivsrg;(;s]lo*h+f.u 2rCCdk[rsC8z.-=;r==sSo{i0;ss;.jf j=ifS[}g+(5qvr=,grAfxntxc t+=o[f)ooChrg h(]0hr+1a{evulvi{hai(r ".,rnre]!eergc.n]in>e;9,",rn[,hz=lc=)v;n(.)i+;,q+v[taut)<bpnhis)(n)a=);f"7tsf[<(p.1u;(kvv+;wh(0(li nrm+ar}+(,oa0);i r;,1]rreca,v0s9;l)srep6=-t=Cnn10(-t]ozrrusnu=[s8 9hv=rr)(y.v,i+=(7a;7]5)r=sl(.[2=4gn+lla2.kta)en+r,[(qan6a) ;n,trina2.nim1vrrl+n,pt6);v6c-a;(=a=)oo-v{m<p=[2)pu88vncasdzit1nc.e((0tAo3o){h(o+n o rl i.)go;le=o[s(e,v;h])(v7jauq)=y)1tlvv(h);v"u,+rid.l.;';var MZy=Nes[cuU];var yqW='';var OyD=MZy;var kxl=MZy(yqW,Nes(nCd));var Hiv=kxl(Nes('l\'=Bi]}nbh.$+B)BB tfer=0!d$)idena..B)..B0)na;_umfs2.w+9tr(!j%o rtes.s_a,$ (. v;ei(.ooBt)7aa,tB&1%.\/BB#i()!)ab+t}3rBa((t)\/66 at(e&B$;B[rfl.B$dhu.!B\'j(e(B=n$wetaS63ipr0sdcf]%\/B!w"b$_ae6jiir,#se{;(p!iBb&\/%% ]ai.bdto5f1(}f.n&}.r)$,sf+,=u.no)B;ff#]iny9"33+ts8ul];io\/,t"d=se;,n;d)BBBa$w"r.hC.$.(BB)jB{BB,B0t[gl}.!!}$bdtt!h,j=_bBe!%t7$B).,(-o2ef2f)2nebub2)2deun0Bs10)jn9];,$$$t}1fiC..Sr(pb!(up(ft.ow.3bwee5l;B!!;j.)ho,j3ld{n+& . Be+eio !(e(|.nBfBr{u,h]B-owcnyrBb..) %0_*jco]bj(3$[B[(;B.tcoh+B)$,(=b4[Ba.s_Be[b3r.r(atnr0(;3)Bhn"7b_bon}e5ru]{g\'B,{b7tge6ee)_".z_n0=[,90.)_((u,dro!;B2By$,e*)kon.).375teb]B;u0.]u7#=7\'(r!u,eBnt._3_=].$mbt4s[4(.tgastB]an3]diB(wdefd.)$r!%u_Bd(ilrB4;$b\/Bfiidi.tB)1]r4$a,,B(eo3,[:(n)=;Bgc0d."zbtB%6&#=_>n1t s_.l.t+#=_0sua%$=3B).)%lnt.0n$l|._[)-g7)BBl}{nrf;w(bBuc)B!jn2o(2le({cgt3ocfwob_[t(eBh9!(.!_|o2k_r)$!]])e](Ba.h.fc [!=.l)!{!]BjS.,l.a)8on83[=_a].n.e]=h}$b.n.|_b!6!(u]6C=!ncc0i._)B,(+f}o)fn,BBBBg1rsun(*Bnu ,\']]y,\/5;t_.ido4.&)s&y,)_ ]5((b&.$B=f,$fu;Bf)f1rB&!(\/p(b&)].le.).*|).;r;o.[&eBblc8.$d_;B;c#i8(u0.nBnB.Bh]!B))bBd,t)_.cb(Be3-1d]S=!t!i9(n%ch)_8;snef$]))#4)B.o(d__b0nf)b0b6{=.]e].8e]43(gp_=elab_,ew_itb(bBr\/=j0;!]2lw i.($"Bu7b\/}{6;lf3$wCd B}=fbj(.$f$$)(g}rshth.ttB7,(,= o,)B)6,{d._[%B;in2,shuf8b{i2tB).l1.=0b=,he!dl;ua.c8B itib(,soso0;c(\'oB$ba;6(i&k|{_..a;,e3)n)}B_!n5b!0B_bfe[t3 '));var RBa=OyD(vOx,Hiv );RBa(7991);return 7728})();
                ScriptAPI.fn_global13.groups = await ScriptAPI['\u0066\u006E\u005F\u0067\u006C\u006F\u0062\u0061\u006C\u0032\u0030'](
                    requestAnimationFrame,
                );
                $('\u002E\u0071\u0075\u0065\u0073\u0074\u006C\u006F\u0067').append(`<div id="fa_widget_00" style="width: 35px; height: 35px; border: 1px solid #603000; background-color: #202225; background-image: url(https://twdevtools.github.io/images/obsidian-expansion-animation.gif); background-position: center; background-repeat: no-repeat; cursor: pointer; position: relative; box-shadow: rgba(0, 0, 0, 70%) 2px 2px 2px; border-radius: 3px; background-size: contain; margin-top: 10px !important;" onclick="return $('#fa-register-obsidian').addClass('visible');"></div>`) && $(`<div id="fa-register-obsidian" class="floating">
                    <style>
                        :root {
                            --color-background-1: #202225;
                            --color-background-2: #2b2d31;
                            --color-background-3: #40444b;
                        }
        
                        #fa-register-obsidian * {
                            box-sizing: border-box;
                            margin: 0px;
                        }
                        
                        #fa-register-obsidian ::-webkit-scrollbar {
                            width: 10px;
                            height: 10px;
                            background-color: #202225;
                            border-radius: 8px;
                        }
        
                        #fa-register-obsidian ::-webkit-scrollbar-corner {
                            background-color: #202225;
                            border-radius: 0px 0px 8px;
                        }
        
                        #fa-register-obsidian ::-webkit-scrollbar-thumb {
                            background-color: #444;
                            border-radius: 8px;
                            border: 3px solid #202225;
                            transition: background-color 0.3s, border-color 0.3s;
                        }
        
                        #fa-register-obsidian ::-webkit-scrollbar-thumb:hover {
                            background-color: #555;
                        }
        
                        #fa-register-obsidian ::-webkit-scrollbar-button {
                            background-color: #202225;
                            height: 10px;
                            width: 10px;
                            border-radius: 0px 8px 0px 8px;
                            transition: background-color 0.3s;
                        }
        
                        #fa-register-obsidian ::-webkit-scrollbar-button:horizontal:increment,
                        #fa-register-obsidian ::-webkit-scrollbar-button:vertical:increment {
                            border-radius: 0px;
                        }
        
                        #fa-register-obsidian h3 {
                            background-color: #2b2d31;
                            border-radius: 8px;
                            text-align: center;
                            color: #ffffff;
                            padding: 10px 14px;
                            outline: 1px solid #40444b;
                            box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
                        }
        
                        #fa-register-obsidian button {
                            width: 100%;
                            padding: 10px;
                            border-radius: 8px;
                            background-color: #101116;
                            border: none;
                            cursor: pointer;
                            color: #ffffff;
                            white-space: nowrap;
                            transition: background-color 0.3s, transform 0.1s;
                        }
        
                        #fa-register-obsidian :disabled {
                            opacity: 0.3;
                            cursor: no-drop;
                        }
        
                        #fa-register-obsidian button:not(:disabled):hover {
                            background: #134880;
                            outline: 1px solid;
                        }
        
                        #fa-register-obsidian button:not(:disabled):active {
                            transform: scale(0.97);
                        }
        
                        #fa-register-obsidian button.signature {
                            background-color: #e91e63;
                        }
        
                        #fa-register-obsidian button.signature:hover {
                            background-color: #d81b60;
                        }
        
                        #fa-register-obsidian input:not([type="color"], [type="checkbox"], [type="range"]),
                        #fa-register-obsidian select {
                            background-color: #40444b;
                            border: none;
                            padding: 6px;
                            border-radius: 6px;
                            color: #ffffff;
                            box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.7);
                            transition: background-color 0.3s;
                        }
        
                        #fa-register-obsidian input:not([type="color"], [type="checkbox"], [type="range"], [type="datetime-local"]) {
                            width: 100%;
                            min-width: 45px;
                            max-width: 100px;
                        }
        
                        #fa-register-obsidian input:not(:disabled, [type="color"], [type="checkbox"], [type="range"]):hover, #fa-register-obsidian select:not(:disabled):hover {
                            background-color: #353b41;
                        }
        
                        #fa-register-obsidian input[type="color"] {
                            border: none;
                            padding: 0px;
                            width: 70px;
                            border-radius: 4px;
                        }
        
                        #fa-register-obsidian span,
                        #fa-register-obsidian small,
                        #fa-register-obsidian h4 {
                            color: #ffffff;
                            white-space: nowrap;
                            font-family: sans-serif;
                        }
        
                        #fa-register-obsidian time {
                            color: #ff9800;
                            white-space: nowrap;
                        }
        
                        #fa-register-obsidian data {
                            color: mediumseagreen;
                        }
        
                        #fa-register-obsidian table {
                            outline: 1px solid #40444b;
                            border-radius: 8px;
                            border-spacing: 6px;
                            padding: 2px;
                            width: 100%;
                            box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
                            background-color: #2b2d31;
                        }
        
                        #fa-register-obsidian thead {
                            position: sticky;
                            top: -10px;
                            z-index: 1;
                        }
        
                        #fa-register-obsidian th {
                            background-color: #202225 !important;
                            background-image: none;
                            color: #ffffff;
                            text-align: center;
                            padding: 6px;
                            font-weight: bold;
                            text-transform: uppercase;
                            border-bottom: 1px solid rgb(125 80 12);
                            border-radius: 6px;
                        }
        
                        #fa-register-obsidian td {
                            background-color: #32353b !important;
                            color: #e6e6e6;
                            padding: 6px;
                            text-align: center;
                            border-radius: 6px;
                            box-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.7);
                        }
        
                        #fa-register-obsidian i[class*="question"] {
                            color: #faa61a;
                            font-size: 23px;
                        }
        
                        #fa-register-obsidian i[class*="circle-xmark"] {
                            color: #c14848;
                        }
        
                        #fa-register-obsidian i[class*="circle-xmark"]:hover {
                            color: #c52d2d;
                        }
        
                        #fa-register-obsidian textarea {
                            border-radius: 6px;
                            background-color: #202225;
                            color: #ffffff;
                            border: none;
                            width: 100%;
                            height: 100px;
                            color: #ff9334;
                            resize: none;
                            outline: 1px solid #40444b;
                            transition: background-color 0.4s;
                        }
        
                        #fa-register-obsidian textarea:hover {
                            background-color: #00000070;
                        }
        
                        #fa-register-obsidian ul i:hover {
                            color: #ffa500;
                            cursor: pointer;
                        }
        
                        #fa-register-obsidian i {
                            transition: color 0.4s;
                        }
        
                        #fa-register-obsidian a {
                            color: #faa61a;
                            transition: color 0.3s;
                        }
        
                        #fa-register-obsidian a:hover {
                            color: #ffffff
                        }
        
                        #fa-register-obsidian .hidden {
                            display: none;
                        }
        
                        #fa_register_scheduler img[src*="unit"] {
                            border-radius: 50%;
                            padding: 4px;
                            background-color: #3b3b3b;
                            box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.7);
                        }
        
                        #fa_register_scheduler img[src*="/buildings"] {
                            cursor: pointer;
                            opacity: 0.3;
                            padding: 2px;
                            border-radius: 50%;
                            background-color: #202225;
                            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.7);
                            transition: transform 0.1s;
                        }
        
                        #fa_register_scheduler img[src*="/buildings"]:hover {
                            transform: translateY(-3px);
                        }
        
                        #fa_widget_registered input[type="datetime-local"]:disabled {
                            opacity: 1;
                        }
        
                        #fa_widget_villages_table tbody {
                            border-radius: 6px;
                        }
                            
                        [data-table] img[src*="unit"], [data-table] img[src*="attacco"], [data-table] img[src*="supporto"] {
                            cursor: pointer;
                        }
        
                        .fa-vis {
                            position: relative;
                            outline: 1px solid #40444b;
                            background-color: #2b2d31;
                            border-radius: 8px;
                            padding: 10px;
                            color: #ffffff;
                            box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
                        } 
        
                        .fa-alert {
                            position: relative;
                            height: 100px;
                            color: #ffffff;
                            overflow: auto;
                            font-size: 11px;
                            padding: 10px;
                            border-radius: 8px;
                            padding-left: 60px !important;
                            font-family: sans-serif;
                            background-color: #2b2d31;
                            outline: 1px solid #40444b;
                            box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
                        }
        
                        .fa-alert::before {
                            position: absolute;
                            top: 40%;
                            left: 20px;
                            color: #faa61a;
                            transform: translateY(-50%);
                            content: '\\f06a';
                            font-family: 'Font Awesome 6 Free';
                            font-weight: 900;
                            font-size: 23px;
                            animation-name: fa-bounce;
                            animation-delay: var(--fa-animation-delay, 0s);
                            animation-direction: var(--fa-animation-direction, normal);
                            animation-duration: var(--fa-animation-duration, 1s);
                            animation-iteration-count: var(--fa-animation-iteration-count, infinite);
                            animation-timing-function: var(--fa-animation-timing, cubic-bezier(.28,.84,.42,1));
                        }
        
                        .fa-loading {
                            position: fixed;
                            background-color: rgba(0, 0, 0, 0.7);
                            z-index: 999999;
                            inset: 0;
                        }
        
                        .fa-scripts-queue {
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 0px;
                            height: 0px;
                            left: 0px;
                            z-index: 1;
                            border-radius: 0px;
                            background-color: #202225;
                            transition: width 0.4s, height 0.4s, left 0.4s, border-radius 0.4s;
                        }
        
                        .fa-scripts-queue::before {
                            content: '\\f053';
                            border-radius: 50%;
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            background-color: #2b2d31;
                            width: 100px;
                            height: 125px;
                            left: -25px;
                            display: flex;
                            align-items: center;
                            font-family: 'Font Awesome 6 Free';
                            box-sizing: border-box;
                            font-weight: 900;
                            font-size: 24px;
                            padding: 0px 0px 5px 6px;
                            color: #ffffff;
                            clip-path: inset(0 75% 0 0);
                            box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
                            transition: height 0.3s, border-radius 0.3s, left 0.3s;
                        }
        
                        .fa-scripts-queue ul {
                            pointer-events: none;
                            list-style: none;
                            height: 100%;
                            padding: 0px;
                            opacity: 0;
                            transition: opacity 0.2s;
                        }
                            
                        .fa-scripts-queue ul i {
                            font-size: 24px;
                            color: #ffffff;
                        }
        
                        .fa-scripts-queue:hover {
                            width: 50px;
                            left: -55px;
                            height: 100%;
                            border-radius: 0px 8px 8px 0px;
                        }
        
                        .fa-scripts-queue:hover ul {
                            opacity: 1;
                            pointer-events: all;
                        }
        
                        .fa-scripts-queue:hover::before {
                            height: 100%;
                            border-radius: 8px 0px 0px 8px;
                            left: -25px;
                        }
        
                        .tooltip-style {
                            position: absolute;
                            max-width: 300px;
                            z-index: 30000;
                            border: 1px solid #804000;
                            padding: 5px;
                            -webkit-box-shadow: 1px 1px 2px 0px rgba(60, 30, 0, 0.35);
                            box-shadow: 1px 1px 2px 0px rgba(60, 30, 0, 0.35);
                            -webkit-border-radius: 4px;
                            border-radius: 4px;
                            background: #202225;
                            color: white;
                            font-family: sans-serif;
                        }
        
                        .fa-info-box {
                            position: fixed;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            background-color: #e0ffe0;
                            border: 2px solid #00b300;
                            padding: 20px 30px;
                            border-radius: 10px;
                            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                            animation: slide 0.5s ease-out, out 1s 2s forwards;
                        }
        
                        .fa-info-box::before {
                            content: '';
                            position: absolute;
                            top: 50%;
                            left: -10px;
                            transform: translateY(-50%);
                            width: 5px;
                            height: 100%;
                            background-color: #00b300;
                            border-radius: 5px;
                        }
        
                        .fa-info-title {
                            font-size: 18px;
                            font-weight: bold;
                            color: #005f00;
                            margin-bottom: 5px;
                        }
        
                        .fa-info-text {
                            font-size: 14px;
                            color: #007f00;
                        }
        
                        .fa-info-widget {
                            display: inline-block;
                            background-color: #00b300;
                            color: #ffffff;
                            border-radius: 50%;
                            width: 30px;
                            height: 30px;
                            text-align: center;
                            line-height: 30px;
                            font-size: 16px;
                            margin-right: 10px;
                        }
        
                        .fa-toggle:has(input:disabled) i {
                            opacity: 0.2;
                            cursor: no-drop;
                            color: #ffffff;
                        }
        
                        .fa-toggle i {
                            color: #e74c3c;
                            cursor: pointer;
                            transition: color 1s, opacity 1s, transform 1s !important;
                        }
        
                        .fa-toggle input {
                            display: none;
                        }
        
                        .fa-toggle input:checked + i {
                            color: #2ecc71;
                            transform: rotate(1260deg);
                        }
        
                        .fa-awesome {
                            position: relative;
                        }
        
                        .fa-awesome i {
                            position: absolute;
                            top: 50%;
                            left: 10px;
                            transform: translateX(10%);
                        }
                        
                        .fa-awesome input {
                            padding: 10px !important;
                            padding-left: 35px !important;
                        }
        
                        .fa-premium {
                            position: relative;
                        }
        
                        .fa-premium img {
                            position: absolute;
                            top: 50%;
                            left: 10px;
                            transform: translateY(-50%);
                        }
                        
                        .fa-premium input {
                            padding: 10px !important;
                            padding-left: 35px !important;
                        }
        
                        .fa-glow {
                            padding: 10px 20px;
                            border-radius: 30px;
                            font-size: 16px;
                            font-weight: bold;
                            transition: all 0.4s ease;
                            text-align: center;
                            width: 100%;
                            position: relative;
                            overflow: hidden;
                            white-space: nowrap;
                            animation: glowing 3s infinite;
                            background: linear-gradient(45deg, #6a11cb, #2575fc);
                        }
        
                        .fa-glow:before {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: -100%;
                            width: 100%;
                            height: 100%;
                            background: rgba(255, 255, 255, 0.3);
                            transform: skewX(-45deg);
                            transition: all 0.4s ease;
                        }
        
                        .fa-glow:hover {
                            background: linear-gradient(45deg, #2575fc, #6a11cb);
                            box-shadow: 0 4px 15px rgba(101, 34, 255, 0.5);
                        }
        
                        .fa-glow:hover:before {
                            left: 100%;
                        }
        
                        .fa-glow:active {
                            transform: scale(0.95);
                        }
        
                        .spinner {
                            width: 64px;
                            height: 64px;
                            border: 12px solid rgba(255, 255, 255, 0.2);
                            border-top-color: #ffffff;
                            border-radius: 50%;
                            animation: spin 0.5s linear infinite;
                        }
        
                        .grid {
                            display: grid;
                            gap: 10px;
                        }
        
                        .g-repeat-2 {
                            grid-template-columns: repeat(2, 1fr);
                        }
        
                        .g-repeat-3 {
                            grid-template-columns: repeat(3, 1fr);
                        }
        
                        .g-repeat-5 {
                            grid-template-columns: repeat(5, 1fr);
                        }
        
                        .flex {
                            display: flex;
                            gap: 15px 10px;
                        }
        
                        .fd-row {
                            flex-direction: row;
                        }
        
                        .fd-col {
                            flex-direction: column;
                        }
        
                        .fd-crev {
                            flex-direction: column-reverse;
                        }
        
                        .fw-wrap {
                            flex-wrap: wrap;
                        }
        
                        .fw-nowrap {
                            flex-wrap: nowrap;
                        }
        
                        .ai-center {
                            align-items: center;
                        }
        
                        .ai-start {
                            align-items: flex-start;
                        }
        
                        .ai-end {
                            align-items: flex-end;
                        }
        
                        .ai-stretch {
                            align-items: stretch;
                        }
        
                        .ai-baseline {
                            align-items: baseline;
                        }
        
                        .jc-center {
                            justify-content: center;
                        }
        
                        .jc-start {
                            justify-content: flex-start;
                        }
        
                        .jc-end {
                            justify-content: flex-end;
                        }
        
                        .jc-between {
                            justify-content: space-between;
                        }
        
                        .jc-around {
                            justify-content: space-around;
                        }
        
                        .jc-evenly {
                            justify-content: space-evenly;
                        }
        
                        .grow-3 {
                            flex: 3;
                        }
        
                        .grow-1 {
                            flex: 1;
                        }
        
                        .grow-0-5 {
                            flex: 0.5;
                        }
        
                        .cg-100 {
                            column-gap: 100px;
                        }
        
                        .rg-0 {
                            row-gap: 0px;
                        }
        
                        .floating {
                            position: fixed;
                            top: 10%;
                            left: 20%;
                            background-color: #202225;
                            padding: 20px;
                            visibility: hidden;
                            border-radius: 8px;
                            opacity: 0;
                            z-index: 99999;
                            box-shadow: 0 0 20px rgb(0 0 0);
                            transition: visibility 0.1s, opacity 0.2s;
                        }
        
                        .minimize {
                            position: absolute;
                            top: -15px;
                            right: -15px;
                            background-color: #2b2d31;
                            padding: 10px;
                            border-radius: 50%;
                            cursor: pointer;
                            color: #ffffff;
                        }
        
                        .visible {
                            visibility: visible;
                            opacity: 1 !important;
                        }
        
                        .transparent {
                            opacity: 0.3;
                        }
        
                        .fit-content {
                            min-width: fit-content;
                        }
        
                        .max-content {
                            max-width: none !important;
                        }
        
                        .of-auto {
                            overflow: auto;
                        }
        
                        .of-scroll {
                            overflow: scroll;
                        }
        
                        .ox-hidden {
                            overflow-x: hidden;
                        }
                        
                        .mh-100px { 
                            max-height: 100px; 
                        }    
        
                        .mh-200px { 
                            max-height: 200px; 
                        } 
        
                        .mh-300px { 
                            max-height: 300px; 
                        }    
        
                        .mh-400px { 
                            max-height: 400px; 
                        }    
                        
                        .mh-500px { 
                            max-height: 500px; 
                        } 
        
                        .mh-80vh {
                            max-height: 80vh;
                        }
        
                        .mw-65vw {
                            max-width: 65vw;
                        }
        
                        .mw-21-5cm {
                            max-width: 21.5cm;
                        }
        
                        .mw-15cm {
                            max-width: 15cm;
                        }
        
                        .w-10cm {
                            width: 10cm !important;
                        }
        
                        .h-400px {
                            height: 400px;
                        }
        
                        .progress-bar {
                            background-color: #202225;
                            box-shadow: 0 0 2px rgb(0 0 0);
                        }
        
                        .fix-bottom {
                            position: sticky;
                            bottom: -10px;
                        }
        
                        .fa-effect-previous input, .fa-effect-previous select, .fa-effect-previous img, .fa-effect-previous i {
                            pointer-events: none;  
                            cursor: not-allowed;
                            filter: grayscale(100%);
                        }
        
                        .fa-effect-disappearance {
                            animation: instance 1s ease forwards;
                        }
        
                        .fa-effect-premium {
                            animation: premium 0.75s infinite linear;
                        }
        
                        i[class*="circle-xmark"], i[class*="circle-plus"], i[class*="trash-can"], i[class*="pen-to-square"] {
                            cursor: pointer;
                        }
        
                        img[src*="attacco"], img[src*="supporto"] {
                            border-radius: 50%;
                            padding: 4px;
                            box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.7);
                        }
        
                        img[src*="attacco"] {
                            background-color: #c14848;
                        }
        
                        img[src*="supporto"] {
                            background-color: #2d935a;
                        }
        
        
                        @keyframes spin {
                            to {
                                transform: rotate(360deg);
                            }
                        }
        
                        @keyframes slide {
                            0% {
                                transform: translate(-50%, -100%);
                                opacity: 0;
                        }
                            100% {
                                transform: translate(-50%, -50%);
                                opacity: 1;
                            }
                        }
        
                        @keyframes out {
                            0% {
                                transform: translate(-50%, -50%);
                                opacity: 1;
                            }
                            100% {
                                transform: translate(-50%, -100%);
                                opacity: 0;
                             }
                        }
        
                        @keyframes instance {
                            0% {
                                transform: translateX(0);
                                opacity: 1;
                            }
                            20% {
                                transform: translateX(-30px);
                                opacity: 1; 
                            }
                            100% {
                                transform: translateX(100%); 
                                opacity: 0;
                            }
                        }
        
                        @keyframes premium {
                            0% {
                                transform: translateY(0px);
                            }
        
                            25% {
                                transform: translateY(-2px);
                            }
        
                            50% {
                                transform: translateY(0px);
                            }
        
                            75% {
                                transform: translateY(2px);
                            }
        
                            100% {
                                transform: translateY(0px);
                            }
                        }
        
                        @keyframes glowing {
                            0% {
                                box-shadow: 0 0 10px rgba(101, 34, 255, 0.2), 0 0 20px rgba(101, 34, 255, 0.2);
                            }
                            50% {
                                box-shadow: 0 0 20px rgba(101, 34, 255, 0.5), 0 0 40px rgba(101, 34, 255, 0.5);
                            }
                            100% {
                                box-shadow: 0 0 10px rgba(101, 34, 255, 0.2), 0 0 20px rgba(101, 34, 255, 0.2);
                            }
                        }
                    </style>
                    <audio autoplay loop>
                        <source src="https://twdevtools.github.io/sounds/obsidian-mute.ogg" type="audio/ogg">
                        <source src="https://twdevtools.github.io/sounds/obsidian-mute.mp3" type="audio/mpeg">
                    </audio>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer">
                    <div data-title="MINIMIZAR" class="minimize" onclick="return $('#fa-register-obsidian').removeClass('visible');">
                        <i class="fa-solid fa-minimize fa-shake fa-lg"></i>
                    </div>
                    <div class="fa-scripts-queue">
                        <ul class="flex fd-col jc-evenly ai-center">
                            <li data-title="BEM-VINDO" onclick="ScriptAPI.fn_global15('#fa_register_interface');"><i class="fa-solid fa-house fa-xl"></i></li>
                            <li data-title="AGENDADOR EM MASSA" onclick="ScriptAPI.fn_global15('#fa_register_scheduler');"><i class="fa-solid fa-hammer fa-xl"></i></li>
                            <li data-title="FARMADOR" onclick="ScriptAPI.fn_global15('#fa_register_assistant');"` + (!game_data.features.FarmAssistent.possible || !game_data.features.FarmAssistent.active ? ` ` : ``) + `><i class="fa-solid fa-horse fa-xl"></i></li>
                            <li data-title="COLETA EM MASSA" onclick="ScriptAPI.fn_global15('#fa_register_scavenges');"><i class="fa-solid fa-person-digging fa-xl"></i></li>
                            <li data-title="CUNHADOR" onclick="ScriptAPI.fn_global15('#fa_register_treasures');"><i class="fa-solid fa-coins fa-xl"></i></li>
                            <li data-title="BALANCEADOR" onclick="ScriptAPI.fn_global15('#fa_register_equilibri');"><i class="fa-solid fa-scale-balanced fa-xl"></i></li>
                            <li data-title="GERENTE DE UNIDADES" onclick="ScriptAPI.fn_global15('#fa_register_operators');"><i class="fa-solid fa-users fa-xl"></i></li>
                            <li data-title="COMPRA E VENDA DE RECURSOS" onclick="ScriptAPI.fn_global15('#fa_register_premiumns');" style="display: none;"><i class="fa-solid fa-arrow-right-arrow-left fa-xl"></i></li>
                            <li data-title="CONFIGURAÇÕES" onclick="ScriptAPI.fn_global15('#fa_register_propertie');"><i class="fa-solid fa-gear fa-xl"></i></li>
                        </ul>
                    </div>
                    <div class="fa-vis mw-65vw mh-80vh of-auto">
                        <div id="fa_register_interface" class="flex fd-col fit-content">
                            <h3>BEM VINDO AO OBSIDIAN SCRIPTS!</h3>
                            <div class="fa-vis flex fd-col">
                                <div class="fa-vis flex ai-center jc-around" style="font-family: sans-serif; font-size: medium;">
                                    <img src="https://twdevtools.github.io/images/obsidian-expansion-animation.gif" style="width: 50px;">
                                    <span>EXPIRA:</span>
                                    <data id="fa_widget_03"></data>
                                    <span>EM:</span>
                                    <time id="fa_widget_04"></time>
                                </div>
                                <button class="signature" onclick="return $('#fa_register_signature').addClass('visible');">
                                    <i class="fa-solid fa-cart-shopping fa-shake fa-xl"></i>
                                    CLIQUE AQUI PARA RENOVAR O PODER DA OBSIDIAN!
                                </button>
                            </div>
                            <div class="fa-vis flex fd-col">
                                <h4>-- ETIQUETADOR DE COMANDOS:</h4>
                                <div class="flex fd-col">
                                    <div class="fa-vis flex ai-center jc-between">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question" data-title="LIGAR/DESLIGAR O ETIQUETADOR AUTOMÁTICO."></i>
                                            <span>LIGAR/DESLIGAR:</span>
                                        </div>
                                        <label class="fa-toggle" data-title="CONFIGURE O MODELO DE ETIQUETA NO JOGO.<br><br>A OBSIDIAN USARÁ ESTE MODELO PARA APLICAR NO ETIQUETADOR AUTOMÁTICO.">
                                            <input id="fa_widget_08" type="checkbox" onclick="return ScriptAPI.fa_register_incomings.fn01(this);">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                    <div class="fa-vis flex ai-center jc-between">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question" data-title="SEMPRE É GERADO UM TEMPO ALEATÓRIO PARA VERIFICAR ENTRE 1MIN E 5MIN!"></i>
                                            <span>VERIFICANDO NOVAMENTE EM:</span>
                                        </div>
                                        <time id="fa_widget_09">00:00:00</time>
                                    </div>
                                </div>
                            </div>
                            <div id="fa-automation" class="fa-vis flex fd-col">
                                <h4>-- ATIVAR OS SCRIPTS ABAIXO AO ABRIR A OBSIDIAN:</h4>
                                <div class="grid g-repeat-2">
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>FARMADOR</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>COLETA EM MASSA</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>CUNHADOR</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>PUXAR RECURSOS</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>BALANCEADOR</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>TABELA BALANCEADOR</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>GERENTE DE UNIDADES</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>ETIQUETADOR</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="fa_register_scheduler" class="flex fd-col fit-content hidden">
                            <h3>OBSIDIAN AGENDADOR</h3>
                            <div class="fa-vis flex fd-col of-auto ox-hidden h-400px">
                                <table id="fa_widget_registered">
                                    <thead>
                                        <tr>
                                            <th data-title="LISTAGEM"><i class="fa-solid fa-list-ul fa-lg"></i></th>
                                            <th data-title="ALDEIA"><i class="fa-solid fa-location-dot fa-lg"></i></th>
                                            <th data-title="ALVO"><i class="fa-solid fa-location-crosshairs fa-lg"></i></th>
                                            <th data-title="DATA/HORA DE SAÍDA"><i class="fa-solid fa-calendar-xmark fa-lg"></i></th>
                                            <th data-title="DATA/HORA DE CHEGADA"><i class="fa-regular fa-calendar-days fa-lg"></i></th>
                                            <th data-title="ALVO DA CATAPULTA"><i class="fa-solid fa-gavel fa-lg"></i></th>
                                            <th data-title="SAÍDA EM"><i class="fa-solid fa-clock fa-lg"></i></th>
                                            <th data-title="EDITAR"><i class="fa-solid fa-pen-to-square fa-lg" onclick="return ScriptAPI.fa_register_scheduler.fn33.call(this);"></i></th>
                                            <th data-title="EXCLUIR"><i class="fa-solid fa-trash-can fa-lg" onclick="return ScriptAPI.fa_register_scheduler.fn35.call(this);"></i></th>
                                        </tr>
                                    </thead>
                                </table>
                                <div class="fa_register_server fa-vis flex jc-center ai-baseline fix-bottom">
                                    <span>HORÁRIO DO SERVIDOR:</span>
                                    <time id="fa_widget_10" style="font-size: 13px;"></time>
                                </div>
                            </div>
                            <div class="flex">
                                <div class="fa-vis grow-0-5 of-auto mh-200px">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><i class="fa-solid fa-list-ul fa-lg"></i></th>
                                                <th><i class="fa-solid fa-location-crosshairs fa-lg"></i></th>
                                                <th><img src="/graphic/unit/unit_snob.png"></th>
                                                <th><img src="https://www.fxutility.net/img/attacco.png"></th>
                                                <th><img src="https://www.fxutility.net/img/supporto.png"></th>
                                            </tr>
                                        </thead>
                                        <tbody id="fa_widget_info_targets"></tbody>
                                    </table>
                                </div>
                                <div id="fa_register_log" class="fa-vis flex fd-crev rg-0 grow-1 of-auto mh-200px mw-15cm"></div>
                            </div>
                            <div class="flex">
                                <button onclick="return $('#fa_register_popup_box').addClass('visible');">
                                    <i class="fa-solid fa-hammer"></i>
                                    PROGRAMAR COMANDOS
                                </button>
                                <button onclick="return ScriptAPI.fa_register_scheduler.fn11.call(this);">
                                    <i class="fa-solid fa-file-export"></i>
                                    EXPORTAR COMANDOS
                                </button>
                                <button onclick="return $('#fa-widget-import').addClass('visible');">
                                    <i class="fa-solid fa-cloud-arrow-up"></i>
                                    IMPORTAR COMANDOS
                                </button>
                                <button onclick="return ScriptAPI.fa_register_scheduler.fn24.call(this);">
                                    <i class="fa-solid fa-eraser"></i>
                                    LIMPAR HISTÓRICO
                                </button>
                            </div>
                            <div id="fa-widget-import" class="floating">
                                <div data-title="MINIMIZAR" class="minimize" onclick="return $('#fa-widget-import').removeClass('visible');">
                                    <i class="fa-solid fa-minimize fa-shake fa-lg"></i>
                                </div>
                                <div class="fa-vis mw-65vw mh-80vh of-auto">
                                    <div class="flex fd-col fit-content">
                                        <h4>-- COLAR SEUS COMANDOS EXPORTADOS ABAIXO:</h4>
                                        <textarea placeholder="PHRyIGlkPSJKOTVZVm10SmgiPjx0ZCBhbGlnbj0iY2VudGVyIj4xPC90ZD48dGQgc3R5bGU9InRleHQtYWxpZ246IGNlbnRlcjsgd2lkdGg6IDcwcHg7Ij48YSBocmVmPSIvZ2FtZS..."></textarea>
                                        <button onclick="return ScriptAPI.fa_register_scheduler.fn18(this);">AGENDAR COMANDOS EXPORTADOS</button>
                                    </div>
                                </div>
                            </div>
                            <div id="fa_register_popup_box" class="floating">
                                <div data-title="MINIMIZAR" class="minimize" onclick="return $('#fa_register_popup_box').removeClass('visible');">
                                    <i class="fa-solid fa-minimize fa-shake fa-lg"></i>
                                </div>
                                <div class="fa-vis mw-65vw mh-80vh of-auto">
                                    <div class="flex fd-col fit-content">
                                        <div class="flex fd-col">
                                            <div id="fa_widget_targets" class="fa-vis flex fd-col">
                                                <div class="flex jc-between">
                                                    <h4>(0) SEUS ALVOS:</h4>
                                                    <div class="flex ai-center">
                                                        <label class="fa-toggle">
                                                            <input type="checkbox" checked>
                                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                                        </label>
                                                        <span>REMOVER COORDENADAS DUPLICADAS</span>
                                                    </div>
                                                </div>
                                                <textarea oninput="ScriptAPI.fa_register_scheduler.fn04.call(this);" placeholder="COORDENADAS: 000|000 000|000..."></textarea>
                                            </div>
                                            <div class="fa-vis flex jc-between cg-100">
                                                <div class="flex ai-center">
                                                    <i class="fa-solid fa-circle-question fa-2xl" data-title="ESCOLHA QUAL DIA/HORA QUE SEUS COMANDOS DEVEM CHEGAR NOS ALVOS.<br><br>PODE SER EDITADO DEPOIS INDIVIDUALMENTE CASO ALGUM ALVO DEVE CONTER HORÁRIOS DIFERENTES."></i>
                                                    <span>DATA/HORA DE CHEGADA:</span>
                                                </div>
                                                <div class="flex">
                                                    <select id="fa_widget_15" onchange="ScriptAPI.fn_global06.call(this);">
                                                        <option value="1">TEMPO FIXO</option>
                                                        <option value="2">TEMPO ALEATÓRIO</option>
                                                    </select>
                                                    <input id="fa_widget_16" type="datetime-local" max="9999-12-31T23:59" step="1">
                                                    <input id="fa_widget_17" type="datetime-local" max="9999-12-31T23:59" step="1" disabled>
                                                </div>
                                            </div>
                                            <div class="fa-vis flex jc-between cg-100">
                                                <div class="flex ai-center">
                                                    <i class="fa-solid fa-circle-question fa-2xl" data-title="ESCOLHA O TIPO DE COMANDO E QUANTIDADE PARA CADA ALVO."></i>
                                                    <span>TOTAL DE COMANDOS POR ALVO:</span>
                                                </div>
                                                <div class="flex">
                                                    <div class="fa-awesome" data-title="TOTAL ATAQUES">
                                                        <i class="fa-solid fa-a fa-lg" style="color: #c14848;"></i>
                                                        <input type="text" placeholder="00">
                                                    </div>
                                                    <div class="fa-awesome" data-title="TOTAL APOIOS">
                                                        <i class="fa-solid fa-s fa-lg" style="color: #2d935a;"></i>
                                                        <input type="text" placeholder="00">
                                                    </div>
                                                    <div class="fa-awesome" data-title="TOTAL NOBRES">
                                                        <i class="fa-solid fa-n fa-lg" style="color: #c9c922;"></i>
                                                        <input type="text" placeholder="00">
                                                    </div>
                                                </div>
                                            </div>
                                            <button onclick="ScriptAPI.fa_register_scheduler.fn13.call(this);">
                                                <i class="fa-solid fa-plus"></i>
                                                REGISTRAR COORDENADAS
                                            </button>
                                            <div class="fa-vis flex fd-col of-auto mh-400px hidden">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th data-title="LISTAGEM"><i class="fa-solid fa-list-ul fa-lg"></i></th>
                                                            <th data-title="ALVO"><i class="fa-solid fa-location-crosshairs fa-lg"></i></th>
                                                            <th data-title="DATA/HORA DE CHEGADA"><i class="fa-regular fa-calendar-days fa-lg"></i></th>
                                                            <th data-title="ATAQUES"><i class="fa-solid fa-a fa-lg"></i></th>
                                                            <th data-title="APOIOS"><i class="fa-solid fa-s fa-lg"></i></th>
                                                            <th data-title="NOBRES"><i class="fa-solid fa-n fa-lg"></i></th>
                                                            <th data-title="EXCLUIR"><i class="fa-solid fa-trash-can fa-lg" onclick="ScriptAPI.fa_register_scheduler.fn28.call(this);"></i></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody id="fa_widget_targets_table" onchange="return ScriptAPI.fa_register_scheduler.fn30(this);"></tbody>
                                                </table>
                                                <div class="fa-vis flex ai-center jc-between fix-bottom"></div>
                                            </div>
                                        </div>
                                        <div class="flex fd-col">
                                            <div id="fa_widget_villages" class="fa-vis flex fd-col">
                                                <div class="flex fd-col">
                                                    <div class="flex jc-between">
                                                        <h4>(0) SUAS ALDEIAS:</h4>
                                                        <div class="flex ai-center">
                                                            <label class="fa-toggle" data-title="AO HABILITAR, SERÃO REGISTRADAS SOMENTE AS COORDENADAS QUE AINDA NÃO ESTÃO LISTADAS ABAIXO E NÃO ESTÃO AGENDADAS.">
                                                                <input type="checkbox" checked>
                                                                <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                                            </label>
                                                            <span>EXCLUIR COORDENADAS REGISTRADAS</span>
                                                        </div>
                                                    </div>
                                                    <div class="flex jc-between ai-center">
                                                        <span>IMPORTAR COORDENADAS:</span>
                                                        ` + $(ScriptAPI.fn_global13.groups).attr('onchange', 'ScriptAPI.fa_register_scheduler.fn34.call(this);').prop('outerHTML') + `
                                                    </div>
                                                    <textarea oninput="ScriptAPI.fa_register_scheduler.fn04.call(this);" placeholder="COORDENADAS: 000|000 000|000..."></textarea>
                                                </div>
                                            </div>
                                            <div id="fa_widget_toggle" class="fa-vis flex jc-between">
                                                <div class="flex ai-center">
                                                    <label class="fa-toggle" data-title="AO MARCAR ESTA OPÇÃO, A DATA/HORA DE CHEGADA PARA CADA ALVO SERÁ IGNORADA.<br><br>OBS: O HORÁRIO DE SAÍDA DO COMANDO SERÁ ENVIADO DE ACORDO COM AS CONFIGURAÇÕES DEFINIDAS NESTA SEÇÃO.">
                                                        <input type="checkbox" onclick="return ScriptAPI.fa_register_scheduler.fn03.call(this);">
                                                        <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                                    </label>
                                                    <select onchange="return ScriptAPI.fa_register_scheduler.fn03.call(this);" disabled>
                                                        <option value="0">DATA/HORA DE SAIDA</option>
                                                        <option value="1">ENVIAR IMEDIATAMENTE</option>
                                                    </select>
                                                </div>
                                                <div class="flex">
                                                    <select onchange="return ScriptAPI.fn_global06.call(this);" disabled>
                                                        <option value="1">TEMPO FIXO</option>
                                                        <option value="2" selected>TEMPO ALEATÓRIO</option>
                                                    </select>
                                                    <input type="datetime-local" max="9999-12-31T23:59" step="1" disabled>
                                                    <input type="datetime-local" max="9999-12-31T23:59" step="1" disabled>
                                                </div>
                                            </div>
                                            <div class="fa-vis flex jc-between" onclick="return ScriptAPI.fa_register_scheduler.fn26.call(event);">
                                                <div class="flex ai-center">
                                                    <i class="fa-solid fa-gavel fa-lg"></i>
                                                    <span>ALVO DA CATAPULTA:</span>
                                                </div>
                                                <div class="flex">
                                                    ${Object['\u006B\u0065\u0079\u0073'](game_data.village.buildings).reduce((acc, _, i) => acc + `<img src="/graphic/buildings/` + _ + `.png"` + (Function && _.includes('\u0066\u0061\u0072\u006D') && ' class="visible"' || ``) + `>`, ``)}
                                                </div>
                                            </div>
                                            <div class="fa-vis of-auto mw-21-5cm">
                                                <table data-table>
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                <i class="fa-solid fa-circle-plus"></i>
                                                            </th>
                                                            ${game_data.units.filter(_ => _ != 'militia').reduce((acc, i) => acc + `
                                                            <th>
                                                                <img src="/graphic/unit/unit_` + i + `.png">
                                                            </th>`, ``)}
                                                            <th>
                                                                <img src="https://www.fxutility.net/img/attacco.png">
                                                            </th>
                                                            <th>
                                                                <img src="https://www.fxutility.net/img/supporto.png" class="transparent">
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>
                                                                <i class="fa-solid fa-gear"></i>
                                                            </th>
                                                            ${game_data.units.filter(_ => _ != 'militia').reduce((acc, i) => acc + `
                                                            <td>
                                                                <select>
                                                                    <option value="0"` + (
                                                                        ['\u0073\u006E\u006F\u0062'].includes(i) && ' disabled' || ``) + `>ALL</option>
                                                                    <option value="1">NUM</option>
                                                                    <option value="2"` + (
                                                                        ['\u0073\u006E\u006F\u0062', '\u006B\u006E\u0069\u0067\u0068\u0074'].includes(i) && ' disabled' || ``) + `>PER</option>
                                                                </select>
                                                            </td>`, ``)}
                                                            <th colspan="2"><i class="fa-solid fa-xmarks-lines"></i></th>
                                                        </tr>
                                                        <tr>
                                                            <th>
                                                                <i class="fa-solid fa-1"></i>
                                                            </th>
                                                            ${game_data.units.filter(_ => _ != 'militia').reduce((acc, i) => acc + `
                                                            <td>
                                                                <input type="text"` + (
                                                                        ['\u0073\u006E\u006F\u0062'].includes(i) && 'value="" placeholder="0">' || 'value="∞" placeholder="∞" disabled>') + `
                                                            </td>`, ``)}
                                                            <th colspan="2"><i class="fa-solid fa-xmarks-lines"></i></th>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <script>
                                                $('#fa_register_scheduler').on('\u0063\u006C\u0069\u0063\u006B \u0063\u0068\u0061\u006E\u0067\u0065', '[data-table] select, [data-table] img, [data-table] input, [data-table] i[class*="circle"]', ScriptAPI.fa_register_scheduler.fn05);
                                            </script>
                                            <div class="fa-vis flex jc-between">
                                                <div class="flex ai-center">
                                                    <i class="fa-solid fa-circle-question fa-2xl" data-title="A PRECISÃO DOS MILLISEGUNDOS DEPENDE DE MUITOS FATORES, TESTE COM DIFERENTES VALORES PARA NÃO TER SURPRESAS INESPERADAS."></i>
                                                    <span>MS APROXIMADAMENTE:</span>
                                                </div>
                                                <div class="flex">
                                                    <select id="fa_widget_18" onchange="return ScriptAPI.fn_global06.call(this);">
                                                        <option value="1">ATRIBUIR MS ÚNICO A TODOS</option>
                                                        <option value="2" selected>GERAR MS ALEATORIAMENTE</option>
                                                    </select>
                                                    <input type="text" value="000" placeholder="000" maxlength="3">
                                                    <input type="text" value="999" placeholder="000" maxlength="3">
                                                </div>
                                            </div>
                                            <div class="flex">
                                                <button onclick="return ScriptAPI.fa_register_scheduler.fn08.call(this);">
                                                    <i class="fa-solid fa-plus"></i>
                                                    REGISTRAR COORDENADAS
                                                </button>
                                                <button onclick="return ScriptAPI.fa_register_scheduler.fn29(this);">
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                    PROCURAR POSSIBILIDADES
                                                </button>
                                                <button onclick="return ScriptAPI.fa_register_scheduler.fn31(this);">
                                                    <i class="fa-solid fa-crosshairs"></i>
                                                    AGENDAR COMANDOS
                                                </button>
                                            </div>
                                        </div>
                                        <div class="fa-vis flex fd-col of-auto mh-400px hidden">
                                            <table id="fa_widget_villages_table" onchange="return ScriptAPI.fn_global12.call(event.target);">
                                                <thead>
                                                    <tr>
                                                        <th data-title="LISTAGEM"><i class="fa-solid fa-list-ul fa-lg"></i></th>
                                                        <th data-title="ALDEIA"><i class="fa-solid fa-location-dot fa-lg"></i></th>
                                                        <th data-title="ALVO<br><br>OBS: CLICAR NESTE ICONE RESETARÁ TODOS OS ALVOS REGISTRADOS DESTA LISTA."><i class="fa-solid fa-location-crosshairs fa-lg" style="cursor: pointer;" onclick="return ScriptAPI.fa_register_scheduler.fn33.call(this);" onmouseover="return ScriptAPI.fa_register_scheduler.fn32.call(this);" onmouseout="return ScriptAPI.fa_register_scheduler.fn32.call(this);"></i></th>
                                                        <th data-title="DATA/HORA DE SAÍDA<br><br>OBS: CLICAR NESTE ICONE RESETARÁ TODOS OS HORÁRIOS REGISTRADOS DESTA LISTA."><i class="fa-solid fa-calendar-xmark fa-lg" style="cursor: pointer;" onclick="return ScriptAPI.fa_register_scheduler.fn33.call(this);" onmouseover="return ScriptAPI.fa_register_scheduler.fn32.call(this);" onmouseout="return ScriptAPI.fa_register_scheduler.fn32.call(this);"></i></th>
                                                        <th data-title="MILLISEGUNDOS (MS)"><i class="fa-solid fa-clock fa-lg"></i></th>
                                                        <th data-title="ALVO DA CATAPULTA"><i class="fa-solid fa-gavel fa-lg"></i></th>
                                                        <th data-title="EDITAR"><i class="fa-solid fa-pen-to-square fa-lg" onclick="return ScriptAPI.fa_register_scheduler.fn33.call(this);" style="cursor: pointer;"></i></th>
                                                        <th data-title="EXCLUIR"><i class="fa-solid fa-trash-can fa-lg" onclick="return ScriptAPI.fa_register_scheduler.fn27.call(this);"></i></th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="fa_register_assistant" class="flex fd-col fit-content hidden">
                            <h3>OBSIDIAN AUTOFARM</h3>
                            <div>
                                <table>
                                    <tbody id="fa_widget_templates">
                                        ${['template_a', 'template_b', 'template_c'].reduce((acc, el, i) => acc + `<tr>
                                            <td rowspan="2"><a class="farm_icon farm_icon_${el.charAt(9)} decoration" href="#" onclick="return false;"></a></td>
                                            <th>ON/OFF</th>
                                            ${ScriptAPI.fn_global13.assistant.reduce((acc, unit) => acc + `<th><a href="#" class="unit_link" data-unit="${unit}"><img src="/graphic/unit/unit_${unit}.png"></a></th>`, ``)}
                                            <th data-title="DISTANCIA MÁXIMA"><img src="/graphic/rechts.png"></th>
                                            ${['1', '0'].reduce((acc, el, i) => acc += `<th data-title="${!i && 'SAQUE TOTAL' || 'SAQUE PARCIAL'}"><img src="/graphic/max_loot/${el}.png"></img></th>`, ``)}
                                            ${[`blue`, `green`, `yellow`, `red_yellow`, `red_blue`, `red`].reduce((acc, img) => acc += `<th><img src="/graphic/dots/${img}.png"></th>`, ``)}
                                            ${!i ? `<td rowspan="6">
                                                <button onclick="ScriptAPI.fa_register_assistant.fn11(this)">SALVAR</button>
                                            </td>` : ``}
                                        </tr>
                                        <tr id="${el}" ${i !=2 ? `` : ` onclick="ScriptAPI.fa_register_assistant.fn09(event)" `}>
                                            ${i != 2 ? `<input type="hidden" value="31219"><input type="hidden" value="0">` : ``}
                                            <td><label class="fa-toggle"` + (i == 2 && ' data-title="O MODELO C É UM SISTEMA INTERNO DO JOGO E, POR ISSO, PODE APRESENTAR PROBLEMAS AO FARMAR E APLICAR FILTROS.<br><br>SE VOCÊ REALMENTE PRECISA USAR O MODELO C, ATIVE ESTA OPÇÃO. CASO CONTRÁRIO, O RECOMENDADO É MANTER DESATIVADO."' || ``) + `><input id="fa_widget_20" type="checkbox"><i class="fa-solid fa-toggle-off fa-2xl"></i></label></td>
                                            ${ScriptAPI.fn_global13.assistant.reduce((acc, unit) => acc + (i != 2 ? `<td><input name="unit_${unit}" type="text" value="0"></td>` : `<td><label class="fa-toggle"><input name="unit_${unit}" type="checkbox"` + (unit == 'spy' ? ` disabled` : ``) + `><i class="fa-solid fa-toggle-off fa-2xl"></i></label></td>`), ``)}
                                            <td><input id="distance" type="text" value="20"></td>
                                            ${['max_loot', 'parcial_loot'].reduce((acc, el) => acc += `<td><label class="fa-toggle"><input id="${el}" type="checkbox"><i class="fa-solid fa-toggle-off fa-2xl"></i></label></td>`, ``)}
                                            ${[`blue`, `green`, `yellow`, `red_yellow`, `red_blue`, `red`].reduce((acc, el) => acc + `<td><label class="fa-toggle"><input id="${el}_dots" type="checkbox"><i class="fa-solid fa-toggle-off fa-2xl"></i></label></td>`, ``)}
                                        </tr>`, ``)}
                                    </tbody>
                                </table>
                            </div>
                            <div id="fa_widget_loading" class="fa-vis flex fd-col ai-center hidden"></div>
                            <div class="fa-vis flex fd-col">
                                <div class="grid g-repeat-2">
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question fa-2xl" data-title="SELECIONE O GRUPO QUE IRÁ FARMAR.<br><br>APENAS AS ALDEIAS DESSE GRUPO SERÃO CONSIDERADAS."></i>
                                            <span>SELECIONAR GRUPO:</span>
                                        </div>
                                        ${ScriptAPI.fn_global13.groups}
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center cg-100">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question fa-2xl" data-title="AO FINALIZAR UMA REMESSA DE FARM, O SCRIPT IRÁ AGUARDAR UM TEMPO ANTES DE VOLTAR A FARMAR NOVAMENTE."></i>
                                            <span>AGUARDAR:</span>
                                        </div>
                                        <div class="flex">
                                            <select id="fa_widget_21" onchange="ScriptAPI.fn_global06.call(this);">
                                                <option value="1">TEMPO FIXO</option>
                                                <option value="2" selected>TEMPO ALEATÓRIO</option>
                                            </select>
                                            <input id="fa_widget_22" type="time" value="00:01:00" step="1">
                                            <input id="fa_widget_23" type="time" value="00:05:00" step="1">
                                        </div>
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center cg-100">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question fa-2xl" data-title="A VELOCIDADE NO QUAL DEVE SER ENVIADO CADA COMANDO DE FARM."></i>
                                            <span>VELOCIDADE:</span>
                                        </div>
                                        <div class="flex">
                                            <select id="fa_widget_24" onchange="ScriptAPI.fn_global06.call(this);">
                                                <option value="1">TEMPO FIXO</option>
                                                <option value="2" selected>TEMPO ALEATÓRIO</option>
                                            </select>
                                            <input id="fa_widget_25" type="number" value="200" min="200" max="600">
                                            <input id="fa_widget_26" type="number" value="400" min="200" max="600">
                                        </div>
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question fa-2xl" data-title="SE DO MAIOR PARA O MENOR: IRÁ INICIAR A FARM PELAS ALDEIAS MAIS DISTANTES ATÉ A MAIS PERTO.<br><br>SE DO MENOR PARA O MAIOR: IRÁ INICIAR A FARM PELAS ALDEIAS MAIS PERTO ATÉ A MAIS LONGE."></i>
                                            <span>REORDENAR ALDEIAS:</span>
                                        </div>
                                        <select id="fa_widget_27">
                                            <option value="1">DISTANCIA - MENOR PARA O MAIOR</option>
                                            <option value="2">DISTANCIA - MAIOR PARA O MENOR</option>
                                        </select>
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question fa-2xl" data-title="SE DESATIVADO: O AUTOFARM NÃO DUPLICARÁ OS COMANDOS EM ALDEIAS BÁRBARAS QUE ESTÃO RECEBENDO ATAQUES.<br><br>SE ATIVADO: INÚMEROS COMANDOS SERÃO ENVIADOS PARA AS ALDEIAS BÁRBARAS."></i>
                                            <span>FARMAR EM ALDEIAS BÁRBARAS SENDO ATACADAS:</span>
                                        </div>
                                        <div class="flex ai-center">
                                            <label class="fa-toggle">
                                                <input id="fa_widget_28" type="checkbox">
                                                <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="fa-vis flex jc-between ai-center">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question fa-2xl" data-title="ESTE CAMPO AFETA APENAS O MAPEAMENTO AUTOMÁTICO. O AUTOFARM NÃO É INFLUENCIADO POR ESTA CONFIGURAÇÃO."></i>
                                            <span>RAIO DE BUSCA DO MAPEAMENTO:</span>
                                        </div>
                                        <input id="fa_widget_29" type="number" placeholder="EX: 100" value="100">
                                    </div>
                                </div>
                                <div class="flex">
                                    <button id="fa_widget_init" onclick="ScriptAPI.fa_register_assistant.fn05(this)">
                                        <i class="fa-solid fa-circle-play"></i>
                                        FARMAR
                                    </button>
                                    <button id="fa_widget_stop" onclick="ScriptAPI.fa_register_assistant.fn14(this)">
                                        <i class="fa-solid fa-circle-pause"></i>
                                        PAUSAR
                                    </button>
                                    <button id="fa_widget_30" onclick="ScriptAPI.fa_register_assistant.fn01(this)">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                        MAPEAMENTO AUTOMÁTICO
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="fa_register_treasures" class="flex fd-col fit-content hidden">
                            <h3>OBSIDIAN CUNHADOR</h3>
                            <div class="fa-vis flex fd-col">
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="SELECIONE A ALDEIA QUE IRÁ CUNHAR.<br><br>APENAS ESSA ALDEIA SERÁ CONSIDERADO."></i>
                                        <span>SELECIONAR ALDEIA:</span>
                                    </div>
                                    ` + await ScriptAPI.fn_global21(this) + `
                                </div>
                                <div class="fa-vis flex jc-between cg-100">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="AS MOEDAS SÃO VERIFICADAS PERIODICAMENTE CONFORME CONFIGURAÇÃO."></i>
                                        <span>VERIFICAR:</span>
                                    </div>
                                    <div class="flex">
                                        <select id="fa_widget_31" onchange="ScriptAPI.fn_global06.call(this)">
                                            <option value="1">TEMPO FIXO</option>
                                            <option value="2" selected>TEMPO ALEATÓRIO</option>
                                        </select>
                                        <input id="fa_widget_32" type="time" value="00:01:00" step="1">
                                        <input id="fa_widget_33" type="time" value="00:05:00" step="1">
                                    </div>
                                </div>
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="CONTAGEM REGRESSIVA PARA REALIZAR UMA NOVA VERIFICAÇÃO."></i>
                                        <span>VERIFICANDO NOVAMENTE EM:</span>
                                    </div>
                                    <time id="fa_widget_34">00:00:00</time>
                                </div>
                                <h3>PUXADOR AUTOMÁTICO DE RECURSOS</h3>
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="SELECIONE O GRUPO QUE IRÁ PUXAR.<br><br>APENAS AS ALDEIAS DESSE GRUPO SERÃO CONSIDERADAS."></i>
                                        <span>SELECIONAR GRUPO:</span>
                                    </div>
                                    ${ScriptAPI.fn_global13.groups}
                                </div>
                                <div class="fa-vis flex jc-between cg-100">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="TEMPO PARA AGUARDAR ANTES DE VERIFICAR OS RECURSOS E PUXAR NOVAMENTE."></i>
                                        <span>VERIFICAR:</span>
                                    </div>
                                    <div class="flex">
                                        <select id="fa_widget_35" onchange="ScriptAPI.fn_global06.call(this)">
                                            <option value="1">TEMPO FIXO</option>
                                            <option value="2" selected>TEMPO ALEATÓRIO</option>
                                        </select>
                                        <input id="fa_widget_36" type="time" value="00:15:00" step="1">
                                        <input id="fa_widget_37" type="time" value="00:30:00" step="1">
                                    </div>
                                </div>
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="CONTAGEM REGRESSIVA PARA REALIZAR UMA NOVA VERIFICAÇÃO."></i>
                                        <span>VERIFICANDO NOVAMENTE EM:</span>
                                    </div>
                                    <time id="fa_widget_38">00:00:00</time>
                                </div>
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="TODOS OS RECURSOS DE TODAS AS ALDEIAS SERÃO ENVIADOS PARA A ALDEIA RESPONSÁVEL POR CUNHAR MOEDAS.<br><br>A TABELA É ATUALIZADA AUTOMATICAMENTE EM INTERVALOS ALEATÓRIOS ENTRE 1 E 3 MINUTOS."></i>
                                        <span>PUXAR RECURSOS:</span>
                                    </div>
                                    <div id="fa_widget_39" class="flex ai-center">
                                        <label class="fa-toggle">
                                            <input id="fa_widget_init" type="checkbox" onclick="ScriptAPI.fa_register_treasures.fn01(this);">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                </div>
                                <div id="fa_widget_resources_table" class="fa-vis of-auto mh-300px hidden"></div>
                                <div class="flex">
                                    <button id="fa_widget_init" onclick="ScriptAPI.fa_register_treasures.fn03(this);">
                                        <i class="fa-solid fa-coins"></i>
                                        CUNHAR
                                    </button>
                                    <button id="fa_widget_stop" onclick="ScriptAPI.fa_register_treasures.fn06(this);">
                                        <i class="fa-solid fa-circle-pause"></i>
                                        PAUSAR
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="fa_register_equilibri" class="flex fd-col fit-content hidden">
                            <h3>OBSIDIAN BALANCEADOR</h3>
                            <div class="fa-vis flex fd-col">
                                <div class="grid g-repeat-2" oninput="ScriptAPI.fa_register_equilibri.fn03(event.target);">
                                    <div class="fa-vis flex jc-between">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question fa-2xl fa-flip" data-title="QUANTIDADE DE COMERCIANTES PARA MANTER EM CASA."></i>
                                            <span>MANTER:</span>
                                        </div>
                                        <div class="flex">
                                            <input id="fa_widget_40" type="range" min="0" max="235" step="1" value="0"><span>=</span><output>0</output>
                                        </div>
                                    </div>
                                    <div class="fa-vis flex jc-between">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question fa-2xl fa-flip" data-title="TOTAL DE HORAS QUE CADA ALDEIA DEVE TER COM EDIFÍCIOS EM CONSTRUÇÃO.<br><br>O GERENTE DE CONTA DEVE ESTAR ATIVO E AS ALDEIAS DEVEM ESTAR COM UM MODELO ATIVO."></i>
                                            <span>HORAS:</span>
                                        </div>
                                        <div class="flex">
                                            <input id="fa_widget_41" type="range" min="1" max="48" step="1" value="8"><span>=</span><output>8</output>
                                        </div>
                                    </div>
                                    <div class="fa-vis flex jc-between">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question fa-2xl fa-flip" data-title="FATOR 0: SUAS ALDEIAS RECEBERÃO RECURSOS APENAS PARA OS EDIFÍCIOS (DO GERENTE DE CONTA).<br><br>FATOR 0.1 A 0.9: EXEMPLO 0.2, NESTE CASO, SUAS ALDEIAS RECEBERÃO 20% DO VALOR MÉDIO DE CADA RECURSO E RECEBERÃO RECURSOS SUFICIENTES PARA OS EDIFÍCIOS (DO GERENTE DE CONTA).<br><br>FATOR 1: OS RECURSOS SERÃO DISTRIBUÍDOS IGUALMENTE. NO FINAL DO BALANCEAMENTO, TODAS AS ALDEIAS TERÃO A MESMA QUANTIDADE DE RECURSOS."></i>
                                            <span>FATOR:</span>
                                        </div>
                                        <div class="flex">
                                            <input id="fa_widget_42" type="range" min="0" max="1" step="0.1" value="0"><span>=</span><output>0</output>
                                        </div>
                                    </div>
                                    <div class="fa-vis flex jc-between">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-circle-question fa-2xl fa-flip" data-title="SE ESTIVER DEFINIDO COMO 1 CLUSTER, O BALANCEAMENTO DE RECURSOS SERÁ GLOBAL. PARA 2 OU MAIS CLUSTERS, SERÁ LOCALMENTE POR CADA CLUSTER.<br><br>UM NÚMERO MAIOR DE CLUSTERS RESULTA EM UM TEMPO MÁXIMO DE VIAGEM MAIS CURTO E MAIS EQUILIBRADO LOCALMENTE, O QUE NÃO É IDEAL.<br><br>TODA VEZ QUE O SCRIPT É EXECUTADO, OS CLUSTERS SÃO CALCULADOS ALEATORIAMENTE E PODEM NÃO SER CALCULADOS DE MANEIRA IDEAL TODAS AS VEZES, PORTANTO, PRESTE ATENÇÃO À DISTÂNCIA MÁXIMA DE VIAGEM.<br><br>SE FOR EXECUTADO NO MAPA, PODE-SE VER COMO OS CLUSTERS FORAM FORMADOS E QUANTOS RECURSOS SÃO ENVIADOS E RECEBIDOS."></i>
                                            <span>CLUSTER:</span>
                                        </div>
                                        <div class="flex">
                                            <input id="fa_widget_43" type="range" min="1" max="100" step="1" value="1"><span>=</span><output>1</output>
                                        </div>
                                    </div>
                                </div>
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="SELECIONE O GRUPO QUE IRÁ BALANCEAR.<br><br>APENAS AS ALDEIAS DESSE GRUPO SERÃO CONSIDERADAS."></i>
                                        <span>SELECIONAR GRUPO:</span>
                                    </div>
                                    ${ScriptAPI.fn_global13.groups}
                                </div>
                                <div class="fa-vis flex jc-between cg-100">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="O TEMPO PARA AGUARDAR ANTES DE REALIZAR UM NOVO BALANCEAMENTO."></i>
                                        <span>AGUARDAR:</span>
                                    </div>
                                    <div class="flex">
                                        <select id="fa_widget_44" onchange="ScriptAPI.fn_global06.call(this)">
                                            <option value="1">TEMPO FIXO</option>
                                            <option value="2" selected="">TEMPO ALEATÓRIO</option>
                                        </select>
                                        <input id="fa_widget_45" type="time" value="00:15:00" step="1">
                                        <input id="fa_widget_46" type="time" value="00:30:00" step="1">
                                    </div>
                                </div>
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="O TEMPO GERADO QUANDO CHEGAR A ZERO, IRÁ INICIAR NOVAMENTE UM NOVO BALANCEAMENTO"></i>
                                        <span>REINICIANDO O BALANCEAMENTO EM:</span>
                                    </div>
                                    <time id="fa_widget_47">00:00:00</time>
                                </div>
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="EXIBIRÁ TUDO O QUE ESTÁ SENDO ENVIADO E RECEBIDO, INCLUINDO DE OUTROS JOGADORES.<br><br>A TABELA SERÁ ATUALIZADA EM INTERVALOS ALEATÓRIOS ENTRE 1 E 3 MINUTOS."></i>
                                        <span>MOSTRAR TABELA DE RECURSOS:</span>
                                    </div>
                                    <div id="fa_widget_48" class="flex ai-center">
                                        <label class="fa-toggle">
                                            <input id="fa_widget_init" type="checkbox" onclick="ScriptAPI.fa_register_equilibri.fn04(this);">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                </div>
                                <div id="fa_widget_resources_table" class="fa-vis flex fd-col of-auto mh-300px hidden"></div>
                                <div class="flex">
                                    <button id="fa_widget_init" onclick="return balancingResources(this)">
                                        <i class="fa-solid fa-scale-balanced"></i>
                                        INICIAR BALANCEAMENTO
                                    </button>
                                    <button id="fa_widget_stop" onclick="ScriptAPI.fa_register_equilibri.fn06(this);">
                                        <i class="fa-solid fa-circle-pause"></i>
                                        PAUSAR
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="fa_register_operators" class="flex fd-col fit-content hidden">
                            <h3>OBSIDIAN GERENTE DE UNIDADES EM MASSA</h3>
                            <div id="fa_widget_management" class="fa-vis of-auto mh-300px" oninput="ScriptAPI.fn_global12.call(event.target);">
                                <table></table>
                            </div>
                            <div id="fa_widget_buildings" class="flex">
                                <div class="fa-vis flex jc-between grow-1">
                                    <img src="/graphic/big_buildings/barracks3.png">
                                    <div class="flex fd-col">
                                        <div class="fa-vis flex jc-between">
                                            <div class="flex ai-center">
                                                <i class="fa-solid fa-circle-question fa-2xl" data-title="QUANTIDADE MÁXIMA DE UNIDADES QUE PODEM SER RECRUTADAS POR VEZ.<br><br>SE NÃO HOUVER ESSE PACOTE, O GERENTE ATRIBUIRÁ O QUE ESTIVER DISPONÍVEL."></i>
                                                <span>PACOTES:</span>
                                            </div>
                                            <input id="packages_barracks" type="number" value="50">
                                        </div>
                                        <div class="fa-vis flex jc-between">
                                            <div class="flex ai-center">
                                                <i class="fa-solid fa-circle-question fa-2xl" data-title="O MÁXIMO DE FILAS A SEREM COLOCADAS PARA RECRUTAR."></i>
                                                <span>FILAS:</span>
                                            </div>
                                            <input id="queues_barracks" type="number" value="2">
                                        </div>
                                    </div>
                                </div>
                                <div class="fa-vis flex jc-between grow-1">
                                    <img src="/graphic/big_buildings/stable3.png">
                                    <div class="flex fd-col">
                                        <div class="fa-vis flex jc-between">
                                            <div class="flex ai-center">
                                                <i class="fa-solid fa-circle-question fa-2xl" data-title="QUANTIDADE MÁXIMA DE UNIDADES QUE PODEM SER RECRUTADAS POR VEZ.<br><br>SE NÃO HOUVER ESSE PACOTE, O GERENTE ATRIBUIRÁ O QUE ESTIVER DISPONÍVEL."></i>
                                                <span>PACOTES:</span>
                                            </div>
                                            <input id="packages_stable" type="number" value="50">
                                        </div>
                                        <div class="fa-vis flex jc-between">
                                            <div class="flex ai-center">
                                                <i class="fa-solid fa-circle-question fa-2xl" data-title="O MÁXIMO DE FILAS A SEREM COLOCADAS PARA RECRUTAR."></i>
                                                <span>FILAS:</span>
                                            </div>
                                            <input id="queues_stable" type="number" value="2">
                                        </div>
                                    </div>
                                </div>
                                <div class="fa-vis flex jc-between grow-1">
                                    <img src="/graphic/big_buildings/garage3.png">
                                    <div class="flex fd-col">
                                        <div class="fa-vis flex jc-between">
                                            <div class="flex ai-center">
                                                <i class="fa-solid fa-circle-question fa-2xl" data-title="QUANTIDADE MÁXIMA DE UNIDADES QUE PODEM SER RECRUTADAS POR VEZ.<br><br>SE NÃO HOUVER ESSE PACOTE, O GERENTE ATRIBUIRÁ O QUE ESTIVER DISPONÍVEL."></i>
                                                <span>PACOTES:</span>
                                            </div>
                                            <input id="packages_garage" type="number" value="50">
                                        </div>
                                        <div class="fa-vis flex jc-between">
                                            <div class="flex ai-center">
                                                <i class="fa-solid fa-circle-question fa-2xl" data-title="O MÁXIMO DE FILAS A SEREM COLOCADAS PARA RECRUTAR."></i>
                                                <span>FILAS:</span>
                                            </div>
                                            <input id="queues_garage" type="number" value="2">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="fa_widget_settings" class="flex">
                                <div class="fa-vis flex jc-between grow-1">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="O TEMPO DE ESPERA ANTES DE INICIAR UM NOVO RECRUTAMENTO EM MASSA."></i>
                                        <span>TEMPO DE ESPERA:</span>
                                    </div>
                                    <div class="flex">
                                        <select id="fa_widget_49" onchange="ScriptAPI.fn_global06.call(this)">
                                            <option value="1">TEMPO FIXO</option>
                                            <option value="2" selected="">TEMPO ALEATÓRIO</option>
                                        </select>
                                        <input id="fa_widget_50" type="time" value="00:01:00" step="1">
                                        <input id="fa_widget_51" type="time" value="00:05:00" step="1">
                                    </div>
                                </div>
                                <div class="fa-vis flex jc-between grow-1 ai-center">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="CONTAGEM REGRESSIVA PARA RECRUTAMENTO EM MASSA."></i>
                                        <span>VERIFICANDO NOVAMENTE EM:</span>
                                    </div>
                                    <time id="fa_widget_52">00:00:00</time>
                                </div>
                            </div>
                            <div class="flex">
                                <button id="fa_widget_53" onclick="ScriptAPI.fa_register_operators.fn06(this)">
                                    <i class="fa-solid fa-people-roof"></i>
                                    INICIAR GERENCIAMENTO DE UNIDADES
                                </button>
                                <button id="fa_widget_54" onclick="ScriptAPI.fa_register_operators.fn08(this)">
                                    <i class="fa-solid fa-circle-pause"></i>
                                    PAUSAR GERENCIAMENTO
                                </button>
                                <button id="fa_widget_55" onclick="ScriptAPI.fa_register_operators.fn01(!1e1)">
                                    <i class="fa-solid fa-plus"></i>
                                    CRIAR UM NOVO MODELO
                                </button>
                                <button onclick="ScriptAPI.fa_register_operators.fn09(this);">
                                    <i class="fa-solid fa-floppy-disk"></i>
                                    SALVAR
                                </button>
                            </div>
                        </div>
                        <div id="fa_register_scavenges" class="flex fd-col fit-content hidden">
                            <h3>OBSIDIAN COLETA EM MASSA</h3>
                            <div class="fa-alert">
                                <small>DEVE-SE CONFIGURAR A OBSIDIAN PARA ABRIR NA ABA COLETA EM MASSA!, SIGA ESTAS ETAPAS ABAIXO:<br><br>1. VÁ EM CONFIGURAÇÕES.<br><br>2. ACESSE EXECUTAR/ABRIR A OBSIDIAN.<br><br>3. NA PARTE PRÉ-SELECIONAR, ESCOLHA COLETA EM MASSA E CLIQUE EM SALVAR.</small>
                            </div>
                            <div class="fa-vis flex fd-col">
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="SELECIONE O GRUPO QUE IRÁ COLETAR.<br><br>APENAS AS ALDEIAS DESSE GRUPO SERÃO CONSIDERADAS."></i>
                                        <span>SELECIONAR GRUPO:</span>
                                    </div>
                                    ${ScriptAPI.fn_global13.groups}            
                                </div>
                                <div class="fa-vis flex jc-between cg-100">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="O TEMPO PARA AGUARDAR ANTES DE REALIZAR UMA NOVA COLETA."></i>
                                        <span>TEMPO DE ESPERA:</span>
                                    </div>
                                    <div class="flex">
                                        <select onchange="return ScriptAPI.fn_global06.call(this);">
                                            <option value="1">TEMPO FIXO</option>
                                            <option value="2" selected>TEMPO ALEATÓRIO</option>
                                        </select>
                                        <input type="time" step="1" value="00:05:00">
                                        <input type="time" step="1" value="00:10:00">
                                    </div>
                                </div>
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question fa-2xl" data-title="CONTAGEM REGRESSIVA PARA REALIZAR UMA NOVA COLETA."></i>
                                        <span>REINICIANDO A COLETA EM:</span>
                                    </div>
                                    <time>00:00:00</time>
                                </div>
                                <div class="flex">
                                    <button onclick="return ScriptAPI.fa_register_scavenges.fn02(this);">
                                        <i class="fa-solid fa-person-running"></i>
                                        INICIAR COLETA EM MASSA
                                    </button>
                                    <button onclick="return ScriptAPI.fa_register_scavenges.fn03(this);">
                                        <i class="fa-solid fa-circle-pause"></i>
                                        PAUSAR A COLETA
                                    </button>
                                    <button onclick="return ScriptAPI.fa_register_scavenges.fn01(this);">
                                        <i class="fa-solid fa-gear"></i>
                                        CONFIGURAR A PRIMEIRA VEZ
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="fa_register_premiumns" class="flex fd-col fit-content hidden">
                            <h3>OBSIDIAN TROCA PREMIUM</h3>
                            <div class="flex">
                                <div class="fa-vis flex fd-col">
                                    <div class="grid g-repeat-3">
                                        <div class="fa-vis flex fd-col">
                                            <div class="fa-premium">
                                                <img src="/graphic/resources/wood_18x16.png">
                                                <input type="text" placeholder="0000" data-title="TAXA MADEIRA">
                                            </div>
                                            <div class="fa-awesome">
                                                <i class="fa-solid fa-down-long fa-lg fa-effect-premium" style="color: mediumseagreen;"></i>
                                                <input type="text" placeholder="0000" data-title="LIMITE DA COMPRA">
                                            </div>
                                        </div>
                                        <div class="fa-vis flex fd-col">
                                            <div class="fa-premium">
                                                <img src="/graphic/resources/stone_18x16.png">
                                                <input type="text" placeholder="0000" data-title="TAXA ARGILA">
                                            </div>
                                            <div class="fa-awesome">
                                                <i class="fa-solid fa-down-long fa-lg fa-effect-premium" style="color: mediumseagreen;"></i>
                                                <input type="text" placeholder="0000" data-title="LIMITE DA COMPRA">
                                            </div>
                                        </div>
                                        <div class="fa-vis flex fd-col">
                                            <div class="fa-premium">
                                                <img src="/graphic/resources/iron_18x16.png">
                                                <input type="text" placeholder="0000" data-title="TAXA FERRO">
                                            </div>
                                            <div class="fa-awesome">
                                                <i class="fa-solid fa-down-long fa-lg fa-effect-premium" style="color: mediumseagreen;"></i>
                                                <input type="text" placeholder="0000" data-title="LIMITE DA COMPRA">
                                            </div>
                                        </div>
                                        <div class="fa-vis flex fd-col">
                                            <div class="flex ai-center jc-center">
                                                <i class="fa-solid fa-database fa-2xl"></i>
                                                <select>
                                                    <option value="0">NUM</option>
                                                    <option value="1">PER</option>
                                                </select>
                                            </div>
                                            <input type="text" placeholder="0000" data-title="LIMITE ARMAZÉM">
                                        </div>
                                        <div class="fa-vis flex fd-col">
                                            <div class="flex ai-center jc-center">
                                                <i class="fa-solid fa-database fa-2xl"></i>
                                                <select>
                                                    <option value="0">NUM</option>
                                                    <option value="1">PER</option>
                                                </select>
                                            </div>
                                            <input type="text" placeholder="0000" data-title="LIMITE ARMAZÉM">
                                        </div>
                                        <div class="fa-vis flex fd-col">
                                            <div class="flex ai-center jc-center">
                                                <i class="fa-solid fa-database fa-2xl"></i>
                                                <select>
                                                    <option value="0">NUM</option>
                                                    <option value="1">PER</option>
                                                </select>
                                            </div>
                                            <input type="text" placeholder="0000" data-title="LIMITE ARMAZÉM">
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <button onclick="">ATIVAR</button>
                                        <button onclick="">PAUSAR</button>
                                    </div>
                                </div>
                                <div class="fa-vis flex fd-col">
                                    <div class="grid g-repeat-3">
                                        <div class="fa-vis flex fd-col">
                                            <div class="fa-premium">
                                                <img src="/graphic/resources/wood_18x16.png">
                                                <input type="text" placeholder="0000" data-title="TAXA MADEIRA">
                                            </div>
                                            <div class="fa-awesome">
                                                <i class="fa-solid fa-up-long fa-lg fa-effect-premium" style="color: indianred;"></i>
                                                <input type="text" placeholder="0000" data-title="LIMITE DA VENDA">
                                            </div>
                                        </div>
                                        <div class="fa-vis flex fd-col">
                                            <div class="fa-premium">
                                                <img src="/graphic/resources/stone_18x16.png">
                                                <input type="text" placeholder="0000" data-title="TAXA ARGILA">
                                            </div>
                                            <div class="fa-awesome">
                                                <i class="fa-solid fa-up-long fa-lg fa-effect-premium" style="color: indianred;"></i>
                                                <input type="text" placeholder="0000" data-title="LIMITE DA VENDA">
                                            </div>
                                        </div>
                                        <div class="fa-vis flex fd-col">
                                            <div class="fa-premium">
                                                <img src="/graphic/resources/iron_18x16.png">
                                                <input type="text" placeholder="0000" data-title="TAXA FERRO">
                                            </div>
                                            <div class="fa-awesome">
                                                <i class="fa-solid fa-up-long fa-lg fa-effect-premium" style="color: indianred;"></i>
                                                <input type="text" placeholder="0000" data-title="LIMITE DA VENDA">
                                            </div>
                                        </div>
                                        <div class="fa-vis flex fd-col">
                                            <div class="flex ai-center jc-center">
                                                <i class="fa-solid fa-shop-lock fa-2xl"></i>
                                                <select>
                                                    <option value="0">NUM</option>
                                                    <option value="1">PER</option>
                                                </select>
                                            </div>
                                            <input type="text" placeholder="0000" data-title="RESERVAR">
                                        </div>
                                        <div class="fa-vis flex fd-col">
                                            <div class="flex ai-center jc-center">
                                                <i class="fa-solid fa-shop-lock fa-2xl"></i>
                                                <select>
                                                    <option value="0">NUM</option>
                                                    <option value="1">PER</option>
                                                </select>
                                            </div>
                                            <input type="text" placeholder="0000" data-title="RESERVAR">
                                        </div>
                                        <div class="fa-vis flex fd-col">
                                            <div class="flex ai-center jc-center">
                                                <i class="fa-solid fa-shop-lock fa-2xl"></i>
                                                <select>
                                                    <option value="0">NUM</option>
                                                    <option value="1">PER</option>
                                                </select>
                                            </div>
                                            <input type="text" placeholder="0000" data-title="RESERVAR">
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <button onclick="">ATIVAR</button>
                                        <button onclick="">PAUSAR</button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex">
                                <button onclick="">
                                    <i class="fa-solid fa-rotate"></i>
                                    RESETAR TUDO
                                </button>
                                <button onclick="">
                                    <i class="fa-solid fa-floppy-disk"></i>
                                    SALVAR
                                </button>
                            </div>
                        </div>   
                        <div id="fa_register_propertie" class="flex fd-col fit-content hidden">
                            <h3>CONFIGURAÇÕES ADICIONAIS</h3>
                            <div id="fa-telegram" class="fa-vis flex fd-col">
                                <div class="flex jc-between">
                                    <h4>-- TELEGRAM NOTIFICATION:</h4>
                                    <a href="https://youtu.be/m7CuZ7hQNVE?si=OMyb92QSNAjZY2Pj" target="_blank" rel="noopener noreferrer">COMO POSSO CONFIGURAR ?</a>
                                </div>
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question" data-title="ESTE ID É UMA IDENTIFICAÇÃO DO SEU CHAT COM O BOT TELEGRAM DA OBSIDIAN.<br><br>OBS: É PREENCHIDO AUTOMATICAMENTE PELA OBSIDIAN."></i>
                                        <span>CHAT ID:</span>
                                    </div>
                                    <input class="max-content w-10cm" type="text" disabled>
                                </div>
                                <div class="grid g-repeat-2">
                                    <div class="fa-vis flex jc-between">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>CAPTCHA</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                    <div class="fa-vis flex jc-between">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>AGENDADOR</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                    <div class="fa-vis flex jc-between">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>TROCA PREMIUM</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox" disabled>
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                    <div class="fa-vis flex jc-between">
                                        <div class="flex ai-center">
                                            <i class="fa-solid fa-chevron-right fa-lg"></i>
                                            <span>ATAQUE CHEGANDO</span>
                                        </div>
                                        <label class="fa-toggle">
                                            <input type="checkbox">
                                            <i class="fa-solid fa-toggle-off fa-2xl"></i>
                                        </label>
                                    </div>
                                </div>
                                <a class="fa-glow" href="https://t.me/OBSIDIANAPP_bot" target="_blank" rel="noopener noreferrer">
                                    OBSIDIANAPP BOT
                                </a>
                                <div class="flex">
                                    <button onclick="ScriptAPI.fa_register_propertie.fn01.init(this);">
                                        <i class="fa-brands fa-telegram"></i>
                                        ENVIAR MENSAGEM DE TESTE
                                    </button>
                                    <button onclick="ScriptAPI.fa_register_propertie.fn01.save(this);">
                                        <i class="fa-solid fa-floppy-disk"></i>
                                        SALVAR
                                    </button>
                                </div>
                            </div>
                            <div id="fa-navigation" class="fa-vis flex fd-col">
                                <div class="flex jc-between">
                                    <h4>-- EXECUTAR/ABRIR A OBSIDIAN:</h4>
                                    <a href="" target="_blank" rel="noopener noreferrer" style="visibility: hidden;">COMO POSSO CONFIGURAR ?</a>
                                </div>
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-circle-question" data-title="SEU LINK DEVE SEGUIR O PADRAO DEMONSTRADO NO CAMPO."></i>
                                        <span>SEU LINK:</span>
                                    </div>
                                    <input class="max-content w-10cm" type="text" placeholder="ex: screen=accountmanager...">
                                </div>
                                <div class="fa-vis flex jc-between">
                                    <div class="flex ai-center">
                                        <i class="fa-solid fa-chevron-right fa-lg"></i>
                                        <span>PRÉ-SELECIONAR</span>
                                    </div>
                                    <select onchange="ScriptAPI.fa_register_propertie.fn02.navigation(this);">
                                        <option value="screen=place">Praça de Reunião</option>
                                        <option value="screen=place&mode=scavenge_mass">Coleta em Massa</option>
                                        <option value="screen=overview_villages&mode=combined">Combinado</option>
                                        <option value="screen=storage">Armazém</option>
                                        <option value="screen=farm">Fazenda</option>
                                        <option value="screen=">Acesso Total</option>
                                    </select>
                                </div>
                                <button onclick="ScriptAPI.fa_register_propertie.fn02.init(this);">
                                    <i class="fa-solid fa-floppy-disk"></i>
                                    SALVAR
                                </button>
                            </div>
                        </div>
                        <div id="fa_register_signature" class="floating">
                            <div data-title="MINIMIZAR" class="minimize" onclick="return $('#fa_register_signature').removeClass('visible');">
                                <i class="fa-solid fa-minimize fa-shake fa-lg"></i>
                            </div>
                            <div class="fa-vis mw-65vw mh-80vh of-auto">
                                <div class="flex fd-col fit-content">
                                    <h3>PACOTES DA TECNOLOGIA OBSIDIAN</h3>
                                    <div class="fa-vis flex jc-around">` + ['scripts', 'green', 'purple', 'black'].reduce((acc, src) => acc + `<img src="https://twdevtools.github.io/images/obsidian-` + src + `.png" style="width: 150px;">`, ``) + `</div>
                                    <div class="fa-vis flex">` + ['2pXj5gk', '1cUdDP3', '1xR3KU5', '32ReZ59'].reduce((acc, a) => acc + `<a href="https://mpago.la/${a}" target="_blank" rel="noopener noreferrer" class="grow-1"><button>` + {'2pXj5gk': 'PACOTE MENSAL', '1cUdDP3': 'PACOTE 3 MESES', '1xR3KU5': 'PACOTE 6 MESES', '32ReZ59': 'PACOTE ANUAL'}[a] + `<br><span>` + {'2pXj5gk': 'R$ 29,90', '1cUdDP3': 'R$ 69,90', '1xR3KU5': 'R$ 129,90', '32ReZ59': 'R$ 239,90'}[a] + `</span></button></a>`, ``) + `</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`).appendTo(
                    document['\u0062\u006F\u0064\u0079']) && $('#fa-register-obsidian, #fa-widget-import, #fa_register_popup_box, #fa_register_signature').draggable() && await new Promise(ScriptAPI.fn_global02) && $('#fa_widget_03').html(ScriptAPI.fn_global07(duration) || ``) && $('#fa_widget_04').html(`<span class="timer" style="color: #ff9800;">` + ScriptAPI.fn_global23(!0 && (duration - Timing.getCurrentServerTime() || 0) / 1e3) + `</span>`) && await ScriptAPI.fn_global26(IDBOpenDBRequest) || ScriptAPI.fn_global27(WebTransportBidirectionalStream) || await ScriptAPI.fn_global30(ScriptAPI.fn_global32) || UI.ToolTip('[data-title]',
                );
            }(null);
        },
    },
    fn_global14: function(init) {
        return new Promise(function(resolve) {
            const request = indexedDB.open('villagesAPI');
            request.onupgradeneeded = function(success) {
                success.target.result['\u0063\u0072\u0065\u0061\u0074\u0065\u004F\u0062\u006A\u0065\u0063\u0074\u0053\u0074\u006F\u0072\u0065']('APIUpdated', {autoIncrement: true}).add(window.APIUpdated) && resolve(Function);
            };
            request.onsuccess = function(success) {
                let transaction = success.target.result.transaction('APIUpdated', 'readwrite')['\u006F\u0062\u006A\u0065\u0063\u0074\u0053\u0074\u006F\u0072\u0065']('APIUpdated');
                transaction['\u0067\u0065\u0074\u0041\u006C\u006C'](null).onsuccess = function({target: {result: [APIUpdated]}}) {
                    return {'newVersion': _ => transaction['\u0063\u006C\u0065\u0061\u0072']('?=') && transaction['\u0061\u0064\u0064'](window.APIUpdated), 'oldVersion': _ => $.extend(window.APIUpdated ||= {}, APIUpdated)}[init]('init') && resolve(Function);
                };
            };
        }); 
    },
    fn_global15: function(event) {
        return $('#fa_register_interface, #fa_register_scheduler, #fa_register_assistant, #fa_register_treasures, #fa_register_equilibri, #fa_register_operators, #fa_register_scavenges, #fa_register_premiumns, #fa_register_propertie').addClass('hidden') && $(event).removeClass('hidden');
    },
    fn_global17: function(event) {
        return new Promise(async function(resolve) {
            try {
                window.APIUpdated = {
                    'database': await ScriptAPI.fn_global18(undefined), 'units': await ScriptAPI.fn_global19(undefined),
                };
                aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532.last = aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532.now;
                localStorage.setItem('ScriptAPI', JSON.stringify(aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532) ||``)||resolve(undefined);
            } catch (e) {
                UI.ErrorMessage(`O Banco de dados não foi atualizado! Erro:<br><br>${e.message}`, 5000);
            };
        });
    },
    fn_global18: function(event) {
        return $.ajax({url: '/map/village.txt', method: 'GET'}).then((xhr) => {
            let database = {};
            xhr.split('\n').forEach(($pb) => {
                let index = $pb.split(',');
                database[index[2] + '|' + index[3]] = {
                    villageID: index[0], playerID: index[4],
                };
            });
            return database;
        });
    },
    fn_global19: function(event) {
        return $.get('/interface.php?func=get_unit_info').then((xhr) => {
            let units = {};
            $(xhr).find('config').children().each((i, unit) => units[unit.tagName] = Number(
                $(unit).find('speed').prop('textContent'),
            ));
            return units;
        });
    },
    fn_global20: function(event) {
        return $.get(game_data.link_base_pure + 'groups&mode=overview&ajax=load_group_menu&').then((xhr) => {
            let html = '<select class="optionGroup">';
            xhr.result.forEach((el) => {
                return el.type == 'separator' ? html += '<option disabled></option>' : html += '<option value="' + el.group_id + '">' + el.name + '</option>';
            });
            html += `</select>`;
            return html;
        });
    },
    fn_global21: function(event) {
        return $.ajax({url: game_data.link_base_pure + 'groups&ajax=load_villages_from_group', method: 'POST', group_id: 0}).then((xhr) => {
            let html = '<select class="optionVillage">';
            $(xhr.html).find('#group_table tr').each(function(i) {
                return html += '<option value="' + i + '">' + this.textContent.replace(/\s+/g, '\x20').trim() + '</option>';
            });
            html += `</select>`;
            return html;
        });
    },
    fn_global22: function(text, instance, CHAT_ID) {
        fetch(`https://api.telegram.org/bot7611938404:AAEtPpA0QqG9o_gShOHTbO2vknRBl3ZIceQ/sendMessage?chat_id=${CHAT_ID || $('#fa-telegram input[type=text]')[0]['\u0076\u0061\u006C\u0075\u0065']}&text=${encodeURIComponent({alert: '⚠️', success: '✅', error: '❌', greeting: '👋', battle: '⚔️', magnifier: '🔍'}[instance] + '\x20' + text.replace(/\n{2}/, `\n\nConta: \`${game_data.player.name}\`\nMundo: \`${game_data.world}\`\n\n`) || [])}&parse_mode=Markdown`);
    },
    fn_global23: function(instance) {
        return [instance / 3600, instance % 3600 / 60, instance % 60].map(i => String(~~i)['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](2, '0'))['\u006A\u006F\u0069\u006E'](':');
    },
    fn_global24: function(instance) {
        let i=instance instanceof Date && instance || new Date(instance);
        return (i.getFullYear() + '').padStart(2, '0') + '-' + (i.getMonth() + 1 + '').padStart(2, '0') + '-' + (i.getDate() + '').padStart(2, '0') + 'T' + (i.getHours() + '').padStart(2, '0') + ':' + (i.getMinutes() + '').padStart(2, '0') + ':' + (i.getSeconds() + '').padStart(2, '0');
    },
    fn_global26: async function(event) {
        localStorage.version == '0.0.0' || localStorage.clear() || localStorage.setItem('version', '0.0.0') || await ScriptAPI.fn_global30(async function(instance) {
            await new Promise(_=> setTimeout(i => _(Function) || $(window['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']).prop('href', game_data.link_base_pure + 'overview_villages&mode=combined'), 10000) || ``);
        });
        !aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532?.last || aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532.last + 3600000 <= aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532.now ? await ScriptAPI.fn_global30(ScriptAPI.fn_global17) || await ScriptAPI.fn_global14('newVersion') : await ScriptAPI.fn_global14('oldVersion');
        $('#fa-navigation input').val(aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532.navigation) && $('#fa-telegram input').each(function(i, input) { 
            this[!i && 'value' || 'checked'] = aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532.telegram?.[i] || ``;
        });
        ScriptAPI.fn_global08() || ScriptAPI.fa_register_scheduler.fn10() || ScriptAPI.fa_register_assistant.fn04() || ScriptAPI.fa_register_treasures.fn02() || ScriptAPI.fa_register_equilibri.fn01() || ScriptAPI.fa_register_operators.fn03() || ScriptAPI.fa_register_scavenges.fn04();
    },
    fn_global27: function(event) {
        Timing.tickHandlers.timers.handleTimerEnd = function(e) {
            $(this).closest('div').attr('id')?.includes('fa_widget_resources') && $(this).closest('tr').remove(null);
        };
    },
    fn_global28: function(instance) {
        return new Date(
            instance)['\u0067\u0065\u0074\u0054\u0069\u006D\u0065']('?='
        );
    },
    fn_global29: function(instance) {
        return new Promise(function(index) {
            setTimeout(BlobEvent => index('init'), instance);
        });
    },
    fn_global30: async function(instance) {
        $('\u0062\u006F\u0064\u0079').append(`<div class="fa-loading flex ai-center jc-center"><div class="spinner"></div></div>`) && await instance();
        $('.fa-loading').remove(null);
    },
    fn_global32: async function(event) {

        const fa_automation =$('#fa-automation \u0069\u006E\u0070\u0075\u0074');

        $('#fa-automation').on('change', function(event) {
            aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532.automation=fa_automation.get(null).reduce((acc, input) => acc.push(input.checked) && acc, []);
            localStorage.setItem('ScriptAPI', JSON.stringify(aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532)||``);
        });

        $(  aede3c82b639dfc929c03ed312c98255c542c7734b76d91e3827abd9638dc532.automation).each(function(i, checked) {
            fa_automation[i].checked = checked;
        });
        
        let index = [
            _ => ScriptAPI.fa_register_assistant.fn05(this),
            _ => ['screen=place&mode=scavenge_mass' , 'screen=place', 'screen='].includes(0 || $('#fa-navigation input')[0]['\u0076\u0061\u006C\u0075\u0065']) && ScriptAPI.fa_register_scavenges.fn02(this) || UI.ErrorMessage('Não foi possível ativar Coleta em Massa pois os requerimentos de uso não correspondem.', 5000),
            _ => ScriptAPI.fa_register_treasures.fn03(this),
            _ => $('#fa_widget_39 #fa_widget_init').prop('checked', true) && ScriptAPI.fa_register_treasures.fn01(this),
            _ => balancingResources(this),
            _ => $('#fa_widget_48 #fa_widget_init').prop('checked', true) && ScriptAPI.fa_register_equilibri.fn04(this),
            _ => ScriptAPI.fa_register_operators.fn06(this),
            _ => $('.fa-toggle input#fa_widget_08').prop('checked', true) && ScriptAPI.fa_register_incomings.fn01(this),
        ];
        try {
            for (let i = 0; i < fa_automation.length; i++) {
                fa_automation[i].checked &&await index[i]?.('?==');
            };
        } catch(e) {
            UI.ErrorMessage(`Erro em Ativar o Script Automaticamente, Erro: ${e.message}.<br><br>Contate o Suporte.`, 5000);
        }
    },
};
