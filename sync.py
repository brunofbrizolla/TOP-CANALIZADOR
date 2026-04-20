import os

pages = {
    "canalizacao-comercial": {
        "title": "Canalização Comercial",
        "hero_bg": "https://topcanalizador.com/wp-content/uploads/2018/10/inner_service_02.jpg",
        "hero_title": "CANALIZAÇÃO <b style='color: #51acfb;'>COMERCIAL</b>",
        "hero_subtitle": "Garantia de Funcionamento Ininterrupto para o seu Negócio",
        "boxes": [
            {"icon": "", "title": "MANUTENÇÃO PREVENTIVA", "text": "Evite paragens no seu negócio. Realizamos inspeções e limpezas regulares para prevenir emergências dispendiosas."},
            {"icon": "", "title": "REPARAÇÕES RÁPIDAS", "text": "Atuamos com a máxima urgência para minimizar o impacto em clientes e funcionários, restabelecendo o fluxo normal."},
            {"icon": "", "title": "NOVAS INSTALAÇÕES", "text": "Projeto e execução de redes hidráulicas e sanitárias adequadas à exigência do seu espaço comercial."},
            {"icon": "", "title": "HIGIENE E SEGURANÇA", "text": "Cumprimos rigorosamente com todas as normas de higiene e segurança, garantindo a salubridade das instalações."}
        ],
        "problems": [
            {"icon": "", "title": "WC PÚBLICO ENTUPIDO", "text": "Sanitas e urinóis bloqueados devido a uso indevido são rapidamente desobstruídos com equipamento mecânico adequado."},
            {"icon": "", "title": "LAVA-LOIÇAS INDUSTRIAIS", "text": "Bancas entupidas por gorduras crónicas na hotelaria? Limpeza profunda com hidrojato de alta pressão (hidrolavagem)."},
            {"icon": "", "title": "ROTURAS NA REDE PRINCIPAL", "text": "Tubagens de grande diâmetro com perda de pressão. Detetamos e resolvemos para não ter falhas de abastecimento."},
            {"icon": "", "title": "CAIXAS GORDURAS CHEIAS", "text": "Extração e esgotamento profissional de caixas separadoras de gorduras e fossas com veículos de aspiração."},
            {"icon": "", "title": "FUGAS OCULTAS", "text": "Aumento súbito da fatura comercial? Localização não destrutiva para identificar roturas em áreas extensas."},
            {"icon": "", "title": "RENOVAÇÃO DE PRUMADAS", "text": "Substituição programada de prumadas envelhecidas sem necessidade de parar a atividade a longo prazo."}
        ]
    },
    "canalizacao-residencial": {
        "title": "Canalização Residencial",
        "hero_bg": "https://topcanalizador.com/wp-content/uploads/2018/09/inner_01.jpg",
        "hero_title": "CANALIZAÇÃO <b style='color: #51acfb;'>RESIDENCIAL</b>",
        "hero_subtitle": "O Conforto da sua Casa Sem Preocupações Nem Surpresas",
        "boxes": [
            {"icon": "", "title": "INSTALAÇÕES COMPLETAS", "text": "Renovação total ou parcial das tubagens e acessórios. Atualizamos e garantimos a durabilidade da sua rede doméstica."},
            {"icon": "", "title": "REPARAÇÕES DOMÉSTICAS", "text": "Substituição de torneiras partidas, autoclismos avariados e todos os arranjos que o seu lar possa necessitar."},
            {"icon": "", "title": "RESOLUÇÃO DE FUGAS", "text": "Sem partir desnecessariamente, localizamos rapidamente qualquer infiltração nas paredes ou debaixo do seu soalho."},
            {"icon": "", "title": "TERMOACUMULADORES", "text": "Instalação, reparação ou manutenção do sistema de aquecimento de águas sanitárias. Água quente sem interrupção."}
        ],
        "problems": [
            {"icon": "", "title": "AUTOCLISMOS AVARIADOS", "text": "Água a correr constantemente ou botão encravado. Reparamos mecanismos interiores de qualquer marca na hora."},
            {"icon": "", "title": "TORNEIRAS A PINGAR", "text": "Substituição de vedantes ou misturadoras completas para acabar de vez com os irritantes pingos ou fugas laterais."},
            {"icon": "", "title": "SIFÕES E ESGOTOS LENTOS", "text": "Bancas ou lavatórios onde a água escoa devagar. Desmontamos, limpamos e desobstruímos todo o sistema local."},
            {"icon": "", "title": "INFILTRAÇÃO DOS VIZINHOS", "text": "A aparecer mancha no teto? Emitimos parecer técnico e identificamos a origem precisa (no piso acima)."},
            {"icon": "", "title": "RUPTURA DE CANOS", "text": "Um cano rebentou? Intervenção célere para contê-lo e repará-lo, minimizando imediatamente os danos de inundação."},
            {"icon": "", "title": "FALTA DE PRESSÃO", "text": "A água mal sai do chuveiro? Diagnosticamos bloqueios por calcário e procedemos à limpeza eficiente da prumada."}
        ]
    },
    "desentupimentos": {
        "title": "Desentupimentos Rápido",
        "hero_bg": "https://topcanalizador.com/wp-content/uploads/2019/06/Desentupimento-canaliza__ao-lisboa.jpg",
        "hero_title": "DESENTUPIMENTOS <b style='color: #51acfb;'>24 HORAS</b>",
        "hero_subtitle": "Serviço Mecanizado e Profundo para Restauro Total do Fluxo",
        "boxes": [
            {"icon": "", "title": "SISTEMA MECANIZADO", "text": "O uso de trado elétrico permite triturar raízes e resíduos duros, libertando totalmente a passagem nos esgotos principais."},
            {"icon": "", "title": "HIDROJATO A PRESSÃO", "text": "Limpeza profunda das tubagens com jatos de água que removem gorduras sedimentadas e repõem o diâmetro original."},
            {"icon": "", "title": "INSPEÇÃO VÍDEO CCTV", "text": "Identificamos bloqueios sem partir paredes, usando câmaras que guiam e evitam surpresas durante a nossa intervenção."},
            {"icon": "", "title": "PREVENÇÃO E LIMPEZA", "text": "Evite entupimentos de emergência. Aconselhamos intervenções preventivas regulares para lares, restaurantes ou empresas."}
        ],
        "problems": [
            {"icon": "", "title": "SANITAS ENTUPIDAS", "text": "A água não desce e ameaça transbordar? Removemos quaisquer bloqueios rapidamente e sem danificar a sua loiça sanitária."},
            {"icon": "", "title": "LAVA-LOIÇAS PARADOS", "text": "Filaçada, gordura ou comida no sifão? Devolvemos o escoamento normal à sua banca da cozinha, com as devidas limpezas."},
            {"icon": "", "title": "RALOS DAS BANHEIRAS", "text": "A água acumula devido ao entupimento por cabelos? Procedemos a desmontagens e extrações minuciosas."},
            {"icon": "", "title": "CAIXAS A TRANSBORDAR", "text": "Maus cheiros a brotar das caixas de inspeção. Limpos inteiramente o interior para libertação das passagens de água suja."},
            {"icon": "", "title": "PRUMADAS GERAIS", "text": "Afeta vários andares? Trabalhamos as infraestruturas verticais de prédios restaurando o saneamento central na sua totalidade."},
            {"icon": "", "title": "ALGEROZES E CALEIRAS", "text": "Sujidade presa bloqueando águas da chuva. Realizamos a remoção dos resíduos pesados e folhas em todos os telhados."}
        ]
    },
    "limpeza-de-fossas": {
        "title": "Limpeza de Fossas",
        "hero_bg": "https://topcanalizador.com/wp-content/uploads/2019/06/fossa-desentupimento-1.jpg",
        "hero_title": "LIMPEZA DE <b style='color: #51acfb;'>FOSSAS</b>",
        "hero_subtitle": "Camiões Combinados de Alta Capacidade com Atendimento Imediato",
        "boxes": [
            {"icon": "", "title": "FROTA ESPECIALIZADA", "text": "Veículos perfeitamente adaptados para aspiração a vácuo, quer se trate do esvaziamento total ou parcial e higienização profunda."},
            {"icon": "", "title": "CAIXAS DE GORDURA", "text": "Intervenção obrigatória no setor alimentar, esgotamos todos os separadores e emitimos relatórios em conformidade legal."},
            {"icon": "", "title": "DESTINO AUTORIZADO", "text": "Não abdicamos da ética e do respeito pelo ambiente, encaminhando todos os resíduos que transportamos para tratamento aprovado."},
            {"icon": "", "title": "MANUTENÇÃO PERIÓDICA", "text": "Contratos com clientes asseguram a inspeção sem preocupação. Garantimos a funcionalidade e evitamos maus odores duradouros."}
        ],
        "problems": [
            {"icon": "", "title": "FOSSA SÉPTICA CHEIA", "text": "Nível no topo e água das casas de banho a recuar. Esvaziamos totalmente a fossa séptica restaurando de seguida a drenagem normal."},
            {"icon": "", "title": "INUNDAÇÃO NA PROPRIEDADE", "text": "Os derrames espalharam e criaram graves constrangimentos ambientais e sanitários? Realizamos a remoção rigorosa."},
            {"icon": "", "title": "POÇO ABSORVENTE BLOQUEADO", "text": "O poço perdeu capacidade de infiltração. Nós utilizamos jatos de alta intensidade que quebram as barreiras minerais."},
            {"icon": "", "title": "CAIXAS INTERLIGAÇÃO AVERTIDAS", "text": "Entupimento nas vias entre saneamento municipal e particular. Atuamos com as espirais adequadas desbloqueando por completo."},
            {"icon": "", "title": "RESTAURANTES OBRIGADOS", "text": "A rotina higiénica em caixas de gordura evita fecho por parte da ASAE. Efetuamos limpezas atempadas agendadas."},
            {"icon": "", "title": "OBSTRUÇÃO POR AREIAS", "text": "Acumulação anormal de pedras, entulho e lamas grossas removidas do interior da fossa usando bicos hidrodinâmicos fortíssimos."}
        ]
    },
    "reparacoes": {
        "title": "Reparações & Manutenções",
        "hero_bg": "https://topcanalizador.com/wp-content/uploads/2018/10/inner_service_04.jpg",
        "hero_title": "REPARAÇÕES <b style='color: #51acfb;'>GERAIS</b>",
        "hero_subtitle": "Intervenções Rigorosas para Qualquer Avaria na sua Propriedade",
        "boxes": [
            {"icon": "", "title": "INTERVENÇÃO IMEDIATA", "text": "Temos técnicos ao seu dispor para deslocações atempadas nos principais centros urbanos resolvendo as avarias da sua casa."},
            {"icon": "", "title": "DIAGNÓSTICO EXATO", "text": "A longa experiência profissional significa ir à raiz das ocorrências identificando o que tem exatamente que ser reparado e protegido."},
            {"icon": "", "title": "CUIDADO DOMÉSTICO", "text": "Protegemos o ambiente residencial ou comercial efetuando o isolamento do ponto de problema a reparar sem o alastrar."},
            {"icon": "", "title": "GARANTIA TRABALHO", "text": "Não improvisamos. Utilizamos acessórios, colagens e partes sempre homologadas aplicando as respetivas garantias de fabricante."}
        ],
        "problems": [
            {"icon": "", "title": "MÁQUINAS A VERTER", "text": "A máquina de lavar deita água pelas tubagens? Alteração e re-instalações nas válvulas asseguram conexões seguras e permanentes."},
            {"icon": "", "title": "LOUÇA SANITÁRIA QUEBRADA", "text": "O lavatório apresenta rachaduras ou o reservatório vaza constantemente. Substituição a tempo é evitar de vez problemas custosos."},
            {"icon": "", "title": "SISTEMAS TERMO", "text": "A água não atinge temperatura na saída? Reparação pontual ou troca de ligações corrompidas no esquentador/cilindro de águas quentes."},
            {"icon": "", "title": "QUEBRA NA PRESSÃO", "text": "As torneiras deixaram de fornecer de forma natural porque acumularam calcário nos filtros. Solucionamos reavendo pressões perfeitas."},
            {"icon": "", "title": "PRUMADAS EXTERIORES", "text": "Ruptura ou queda de secções por desgaste exterior à propriedade? Restauramos com material de tubagem mais contemporânea."},
            {"icon": "", "title": "LIGAÇÕES NA CAVE", "text": "Reparações e manutenções intensas de todos os ramais das caves de prédios onde a humidade castiga o material preexistente original."}
        ]
    },
    "servicos-industriais": {
        "title": "Serviços Industriais",
        "hero_bg": "https://topcanalizador.com/wp-content/uploads/2018/10/inner_service_01.jpg",
        "hero_title": "SERVIÇOS <b style='color: #51acfb;'>INDUSTRIAIS</b>",
        "hero_subtitle": "Alta Capacidade e Cumprimento de Normas de Segurança Apertadas",
        "boxes": [
            {"icon": "", "title": "REDES HIDRÁULICAS", "text": "Montagem de linhas pressurizadas, redes de refrigeração e extração em áreas fabris dimensionadas com a máxima exatidão da indústria."},
            {"icon": "", "title": "NORMAS DE SEGURANÇA", "text": "Superação do ambiente de exigência asseguramos que o cumprimento perante todas as entidades legais de saúde ocupacional seja íntegro."},
            {"icon": "", "title": "RENOVAÇÃO DE FÁBRICAS", "text": "Trabalhos e restruturações escaladas de longa intervenção. A operação inclui sempre total dedicação das prumadas, tanques e decantação."},
            {"icon": "", "title": "MANUTENÇÃO CONTÍNUA", "text": "Alocamos contratos prolongados garantindo estabilidade e fluidez nas instalações prevenindo problemas com impacto na linha da fabricação."}
        ],
        "problems": [
            {"icon": "", "title": "TANQUES DE ÁGUAS", "text": "Manutenção, lavagem integral e tratamentos e resolução de debilidades na infraestrutura macro de depósitos de armazenamento massivo."},
            {"icon": "", "title": "REDES DE INCÊNDIO", "text": "Inspeção focada em sprinklers, ramais de supressão e hidrantes preexistentes; detetamos perdas crónicas pondo em risco toda a aprovação legal da vistoria."},
            {"icon": "", "title": "ESGOTO DE PROCESSAMENTO", "text": "Acumulações industriais obstrutivas nas principais valas originam paralisações e danos ao maquinário central adjacente da nave da empresa."},
            {"icon": "", "title": "TUBAGEM TÉRMICA", "text": "Fugas perigosas de sistemas fechados a altas concentrações de temperatura que degradam os revestimentos circundantes requerendo isolamento total urgenciado."},
            {"icon": "", "title": "BOMBEAMENTO INTENSIVO", "text": "Reparação em salas inteiras em poços subterrânicos contendo fluidos altamente viscosos do processamento dos materiais finais do processo cliente."},
            {"icon": "", "title": "ESGOTAMENTO PLUVIAL DE ALTO DÉBITO", "text": "Naves de extensa e considerável base superficial precisam escoar volume enorme em intempéries desobstruindo galerias pesadas principais e periféricas."}
        ]
    },
    "urgencias-24-7": {
        "title": "Urgências 24H",
        "hero_bg": "https://topcanalizador.com/wp-content/uploads/2019/06/fossa-desentupimento-1.jpg",
        "hero_title": "URGÊNCIAS <b style='color: #51acfb;'>24 HORAS</b>",
        "hero_subtitle": "Ação Rápida Para Conter o Problema e Evitar Mais Danos",
        "boxes": [
            {"icon": "", "title": "ATENDIMENTO PERMANENTE", "text": "O seu incidente imprevisto nunca aguarda, e por estarmos cientes disso respondemos incansavelmente a todas as suas solicitações noturnas."},
            {"icon": "", "title": "FROTA OPERACIONAL", "text": "Todas as brigadas andam totalmente munidas das ferramentas base nas estradas portuguesas pelo que o tempo é diminuído para atuações curtas imediatas."},
            {"icon": "", "title": "PROFISSIONAIS DA ÁREA", "text": "Ninguém com menor experiência pode chegar à pressa resolvendo corretamente o caos nas inundações extremas exigindo perícia rigorosa nas intervenções."},
            {"icon": "", "title": "SEM SUSTOS FINANCEIROS", "text": "Transparência total durante o diagnóstico urgente apresentado ao portador das habitações antes de iniciar os grandes trâmites mecânicos no interior das tubagens."}
        ],
        "problems": [
            {"icon": "", "title": "CANO ROMPIDO", "text": "Situação perigosa que ameaça invadir assoalhadas inteiras da sua casa no meio da folga da família exigindo trancamento mecânico e reparações diretas."},
            {"icon": "", "title": "ENTUPIMENTO SEVERO NA PRUMADA", "text": "Sinais drásticos dos efluentes do andar em cima em processo vertiginoso para o pavimento de sua casa por intermédio das caixas de esgoto interligadas com a sua cozinha."},
            {"icon": "", "title": "INUNDAÇÃO NA ENTRADA/CAVE", "text": "Água maciça bloqueando totalmente elevadores ou acessos pela base inferior. Resolve - se efetuando captações massivas por aspiração profunda."},
            {"icon": "", "title": "ROTURAS EXTERIORES DE RUA", "text": "Sapos a queimar ou pressões brutas fazendo crateras próximas de propriedades sendo necessário maquinarias adaptadas."},
            {"icon": "", "title": "QUEDA DE AQUECIMENTO CENTRAL", "text": "A falta grave nas fugas originando danos num sistema geral da caldeira originando um transtorno geral na habitabilidade familiar no período mais frio sem nenhum pré avismo."},
            {"icon": "", "title": "QUEBRA DA CAIXA SIFONADA", "text": "O descolamento e quebra direta entre passagens originando mau estar com cheiros que tornam permanentes nas instalações impossibilitando totalmente a estadia sanitária da sua fração."}
        ]
    }
}

template = """---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import CookieConsent from '../components/CookieConsent.astro';

// Serviço: {TITLE} (Automated Page Generation)
---

<Layout title="{TITLE} - Top Canalizador">
  <Header />

  <!-- Hero Section -->
  <section class="bt_bb_section bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_image bt_bb_bottom_spacing_medium" style="background-image: url('{HERO_BG}'); padding: 190px 0 180px !important; background-position: center; background-size: cover; position: relative;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(rgba(12, 28, 44, 0.8), rgba(12, 28, 44, 0.4)); z-index: 0;"></div>
    <div class="bt_bb_port" style="position: relative; z-index: 1;">
        <div class="bt_bb_cell">
            <div class="bt_bb_cell_inner">
                <div class="bt_bb_row">
                    <div class="bt_bb_column col-xxl-12 col-xl-12 bt_bb_align_center">
                        <div class="bt_bb_column_content">
                            <header class="bt_bb_headline bt_bb_dash_none bt_bb_size_huge bt_bb_align_center">
                                <h1><span class="bt_bb_headline_content" style="color: #fff; font-weight: 900; font-size: 58px; text-transform: uppercase; letter-spacing: -2px; text-shadow: 0 4px 20px rgba(0,0,0,0.6);">{HERO_TITLE}</span></h1>
                                <div class="bt_bb_headline_subheadline" style="color: rgba(255,255,255,0.9); font-size: 24px; font-weight: 500; margin-top: 20px; letter-spacing: 0.5px;">{HERO_SUBTITLE}</div>
                            </header>
                            <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"></div>
                            
                            <!-- Homepage Standard Button Replication -->
                            <div class="bt_bb_button bt_bb_color_scheme_10 bt_bb_icon_position_left bt_bb_style_filled bt_bb_size_large bt_bb_width_inline bt_bb_shape_inherit bt_bb_target_self bt_bb_align_center" style="--primary-color:#ffffff; --secondary-color:#ef4c37;">
                                <a href="tel:+351969146836" target="_self" class="bt_bb_link" title="LIGAR AGORA">
                                    <span class="bt_bb_button_text">LIGAR AGORA: 969 146 836</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

  <!-- Feature Boxes Overlapping Hero -->
  <section style="margin-top: -160px; position: relative; z-index: 20; padding: 0;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 15px;">
      <div style="display: flex; gap: 0; align-items: stretch;">
        
        <!-- Box 1: Azul escuro -->
        <div style="flex: 1; background-color: #005299; padding: 36px 30px; height: 340px; overflow: hidden; box-sizing: border-box; display: flex; flex-direction: column; gap: 0;">
          <div class="bt_bb_icon bt_bb_color_scheme_4 bt_bb_style_filled bt_bb_size_medium bt_bb_shape_square bt_bb_align_inherit" style="--primary-color:#51acfb; --secondary-color:#ffffff; margin-bottom: 20px; flex-shrink: 0;">
            <span data-ico-fontawesome="{B1_IC}" class="bt_bb_icon_holder"></span>
          </div>
          <h4 style="color:#fff; font-size:16px; font-weight:700; text-transform:uppercase; margin:0 0 12px 0; line-height:1.3; flex-shrink:0;">{B1_T}</h4>
          <p style="color:rgba(255,255,255,0.85); font-size:14px; line-height:1.6; margin:0;">{B1_I}</p>
        </div>

        <!-- Box 2: Azul claro -->
        <div style="flex: 1; background-color: #50abf9; padding: 36px 30px; height: 340px; overflow: hidden; box-sizing: border-box; display: flex; flex-direction: column; gap: 0;">
          <div class="bt_bb_icon bt_bb_color_scheme_4 bt_bb_style_filled bt_bb_size_medium bt_bb_shape_square bt_bb_align_inherit" style="--primary-color:#005299; --secondary-color:#ffffff; margin-bottom: 20px; flex-shrink: 0;">
            <span data-ico-fontawesome="{B2_IC}" class="bt_bb_icon_holder"></span>
          </div>
          <h4 style="color:#003b73; font-size:16px; font-weight:700; text-transform:uppercase; margin:0 0 12px 0; line-height:1.3; flex-shrink:0;">{B2_T}</h4>
          <p style="color:#004080; font-size:14px; line-height:1.6; margin:0;">{B2_I}</p>
        </div>

        <!-- Box 3: Azul escuro -->
        <div style="flex: 1; background-color: #005299; padding: 36px 30px; height: 340px; overflow: hidden; box-sizing: border-box; display: flex; flex-direction: column; gap: 0;">
          <div class="bt_bb_icon bt_bb_color_scheme_4 bt_bb_style_filled bt_bb_size_medium bt_bb_shape_square bt_bb_align_inherit" style="--primary-color:#51acfb; --secondary-color:#ffffff; margin-bottom: 20px; flex-shrink: 0;">
            <span data-ico-fontawesome="{B3_IC}" class="bt_bb_icon_holder"></span>
          </div>
          <h4 style="color:#fff; font-size:16px; font-weight:700; text-transform:uppercase; margin:0 0 12px 0; line-height:1.3; flex-shrink:0;">{B3_T}</h4>
          <p style="color:rgba(255,255,255,0.85); font-size:14px; line-height:1.6; margin:0;">{B3_I}</p>
        </div>

        <!-- Box 4: Azul claro -->
        <div style="flex: 1; background-color: #50abf9; padding: 36px 30px; height: 340px; overflow: hidden; box-sizing: border-box; display: flex; flex-direction: column; gap: 0;">
          <div class="bt_bb_icon bt_bb_color_scheme_4 bt_bb_style_filled bt_bb_size_medium bt_bb_shape_square bt_bb_align_inherit" style="--primary-color:#005299; --secondary-color:#ffffff; margin-bottom: 20px; flex-shrink: 0;">
            <span data-ico-fontawesome="{B4_IC}" class="bt_bb_icon_holder"></span>
          </div>
          <h4 style="color:#003b73; font-size:16px; font-weight:700; text-transform:uppercase; margin:0 0 12px 0; line-height:1.3; flex-shrink:0;">{B4_T}</h4>
          <p style="color:#004080; font-size:14px; line-height:1.6; margin:0;">{B4_I}</p>
        </div>

      </div>
    </div>
  </section>

  <!-- Problemas que Resolvemos Section -->
  <section class="bt_bb_section bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_bottom_spacing_large bt_bb_top_spacing_medium" style="background-color: #f7f9fa; padding: 100px 0;">
      <div class="bt_bb_port">
          <div class="bt_bb_cell">
              <div class="bt_bb_cell_inner">
                  <!-- Section Header -->
                  <div class="bt_bb_row">
                      <div class="bt_bb_column col-xxl-12 col-xl-12 bt_bb_align_center">
                          <header class="bt_bb_headline bt_bb_dash_none bt_bb_superheadline bt_bb_size_large bt_bb_align_center">
                              <h3>
                                  <span class="bt_bb_headline_superheadline" style="color: #51acfb; font-weight: 700; letter-spacing: 2px;">TUDO PARA UMA SOLUÇÃO DEFINITIVA</span>
                                  <span class="bt_bb_headline_content"><span>Onde nós <b>Atuamos</b></span></span>
                              </h3>
                          </header>
                          <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_large"></div>
                      </div>
                  </div>

                  <!-- 3 Columns Layout -->
                  <div class="bt_bb_row bt_bb_column_gap_30">
                      <!-- Column 1 -->
                      <div class="bt_bb_column col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bt_bb_vertical_align_top bt_bb_align_left">
                          <div class="bt_bb_service bt_bb_color_scheme_1 bt_bb_style_borderless bt_bb_size_medium bt_bb_shape_circle bt_bb_align_inherit" style="--service-primary-color:#51acfb; background: #fff; padding: 40px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); border-radius: 8px; height: 100%;">
                              <span data-ico-fontawesome="{P1_IC}" class="bt_bb_icon_holder" style="color:#51acfb;"></span>
                              <div class="bt_bb_service_content">
                                  <div class="bt_bb_service_content_title" style="font-size: 18px; margin-bottom: 15px; font-weight: 700;">{P1_T}</div>
                                  <div class="bt_bb_service_content_text" style="color: #555; line-height: 1.6;">{P1_I}</div>
                              </div>
                          </div>
                          <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"></div>
                      </div>
                      <!-- Column 2 -->
                      <div class="bt_bb_column col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bt_bb_vertical_align_top bt_bb_align_left">
                          <div class="bt_bb_service bt_bb_color_scheme_1 bt_bb_style_borderless bt_bb_size_medium bt_bb_shape_circle bt_bb_align_inherit" style="--service-primary-color:#51acfb; background: #fff; padding: 40px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); border-radius: 8px; height: 100%;">
                              <span data-ico-fontawesome="{P2_IC}" class="bt_bb_icon_holder" style="color:#51acfb;"></span>
                              <div class="bt_bb_service_content">
                                  <div class="bt_bb_service_content_title" style="font-size: 18px; margin-bottom: 15px; font-weight: 700;">{P2_T}</div>
                                  <div class="bt_bb_service_content_text" style="color: #555; line-height: 1.6;">{P2_I}</div>
                              </div>
                          </div>
                          <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"></div>
                      </div>
                      <!-- Column 3 -->
                      <div class="bt_bb_column col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bt_bb_vertical_align_top bt_bb_align_left">
                          <div class="bt_bb_service bt_bb_color_scheme_1 bt_bb_style_borderless bt_bb_size_medium bt_bb_shape_circle bt_bb_align_inherit" style="--service-primary-color:#51acfb; background: #fff; padding: 40px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); border-radius: 8px; height: 100%;">
                              <span data-ico-fontawesome="{P3_IC}" class="bt_bb_icon_holder" style="color:#51acfb;"></span>
                              <div class="bt_bb_service_content">
                                  <div class="bt_bb_service_content_title" style="font-size: 18px; margin-bottom: 15px; font-weight: 700;">{P3_T}</div>
                                  <div class="bt_bb_service_content_text" style="color: #555; line-height: 1.6;">{P3_I}</div>
                              </div>
                          </div>
                          <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"></div>
                      </div>
                  </div>
                  
                  <div class="bt_bb_row bt_bb_column_gap_30">
                      <!-- Column 4 -->
                      <div class="bt_bb_column col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bt_bb_vertical_align_top bt_bb_align_left">
                          <div class="bt_bb_service bt_bb_color_scheme_1 bt_bb_style_borderless bt_bb_size_medium bt_bb_shape_circle bt_bb_align_inherit" style="--service-primary-color:#51acfb; background: #fff; padding: 40px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); border-radius: 8px; height: 100%;">
                              <span data-ico-fontawesome="{P4_IC}" class="bt_bb_icon_holder" style="color:#51acfb;"></span>
                              <div class="bt_bb_service_content">
                                  <div class="bt_bb_service_content_title" style="font-size: 18px; margin-bottom: 15px; font-weight: 700;">{P4_T}</div>
                                  <div class="bt_bb_service_content_text" style="color: #555; line-height: 1.6;">{P4_I}</div>
                              </div>
                          </div>
                          <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"></div>
                      </div>
                      <!-- Column 5 -->
                      <div class="bt_bb_column col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bt_bb_vertical_align_top bt_bb_align_left">
                          <div class="bt_bb_service bt_bb_color_scheme_1 bt_bb_style_borderless bt_bb_size_medium bt_bb_shape_circle bt_bb_align_inherit" style="--service-primary-color:#51acfb; background: #fff; padding: 40px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); border-radius: 8px; height: 100%;">
                              <span data-ico-fontawesome="{P5_IC}" class="bt_bb_icon_holder" style="color:#51acfb;"></span>
                              <div class="bt_bb_service_content">
                                  <div class="bt_bb_service_content_title" style="font-size: 18px; margin-bottom: 15px; font-weight: 700;">{P5_T}</div>
                                  <div class="bt_bb_service_content_text" style="color: #555; line-height: 1.6;">{P5_I}</div>
                              </div>
                          </div>
                          <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"></div>
                      </div>
                      <!-- Column 6 -->
                      <div class="bt_bb_column col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 bt_bb_vertical_align_top bt_bb_align_left">
                          <div class="bt_bb_service bt_bb_color_scheme_1 bt_bb_style_borderless bt_bb_size_medium bt_bb_shape_circle bt_bb_align_inherit" style="--service-primary-color:#51acfb; background: #fff; padding: 40px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); border-radius: 8px; height: 100%;">
                              <span data-ico-fontawesome="{P6_IC}" class="bt_bb_icon_holder" style="color:#51acfb;"></span>
                              <div class="bt_bb_service_content">
                                  <div class="bt_bb_service_content_title" style="font-size: 18px; margin-bottom: 15px; font-weight: 700;">{P6_T}</div>
                                  <div class="bt_bb_service_content_text" style="color: #555; line-height: 1.6;">{P6_I}</div>
                              </div>
                          </div>
                          <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"></div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
  </section>

  <!-- CTA Banner -->
  <section id="bt_bb_section_cta" class="bt_bb_section bt_bb_layout_boxed_1200 bt_bb_vertical_align_top bt_bb_background_color_scheme_1 bt_bb_bottom_spacing_huge bt_bb_top_spacing_huge">
    <div class="bt_bb_port">
        <div class="bt_bb_cell">
            <div class="bt_bb_cell_inner">
                <div class="bt_bb_row">
                    <div class="bt_bb_column col-xxl-12 col-xl-12 bt_bb_align_center">
                        <header class="bt_bb_headline bt_bb_dash_none bt_bb_size_large">
                            <h2><span class="bt_bb_headline_content"><span>Poupe dinheiro e evite estragos maiores! LIGUE-NOS JÁ!</span></span></h2>
                        </header>
                        <div class="bt_bb_separator bt_bb_border_style_none bt_bb_bottom_spacing_medium"></div>
                        <div class="bt_bb_button bt_bb_style_filled bt_bb_size_medium bt_bb_shape_square bt_bb_color_scheme_7">
                            <a href="tel:969146836" target="_self" class="bt_bb_link"><span class="bt_bb_button_text">CHAMAR TÉCNICO AGORA</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

  <Footer />
  <CookieConsent />
</Layout>
"""

import sys

for key, data in pages.items():
    page_path = f"src/pages/{key}.astro"
    if not os.path.exists(page_path):
        print(f"Skipping {key}, file not found.")
        continue
    
    output = template
    output = output.replace("{TITLE}", data["title"])
    output = output.replace("{HERO_BG}", data["hero_bg"])
    output = output.replace("{HERO_TITLE}", data["hero_title"])
    output = output.replace("{HERO_SUBTITLE}", data["hero_subtitle"])
    
    for i in range(4):
        output = output.replace(f"{{B{i+1}_IC}}", data["boxes"][i]["icon"])
        output = output.replace(f"{{B{i+1}_T}}", data["boxes"][i]["title"])
        output = output.replace(f"{{B{i+1}_I}}", data["boxes"][i]["text"])
        
    for i in range(6):
        output = output.replace(f"{{P{i+1}_IC}}", data["problems"][i]["icon"])
        output = output.replace(f"{{P{i+1}_T}}", data["problems"][i]["title"])
        output = output.replace(f"{{P{i+1}_I}}", data["problems"][i]["text"])
        
    with open(page_path, "w", encoding="utf-8") as f:
        f.write(output)

print("All service pages synchronized!")
