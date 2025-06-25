
// Chart.js is available globally via script tag
declare var Chart: any;

const patologiasData = [
    { id: 'occlusion_intestinal', name: 'Oclusión Intestinal', mortality: 20, severity: 'Emergencia', viewed: false, details: { clinica: '- Dolor abdominal: tipo cólico (lucha).\n- Distensión abdominal.\n- Vómitos: precoces y biliosos (alta); tardíos y fecaloideos (baja).\n- Detención de heces y gases.', fisiopatologia: '- Mecánica: Obstáculo físico (bridas, hernias, tumores).\n- Funcional (íleo): Parálisis del peristaltismo (postoperatorio, peritonitis).\n- Acumulación de líquido y gas proximal a la obstrucción, distensión, aumento de la presión intraluminal, deshidratación, y traslocación bacteriana.', diagnostico: '- Clínico: basado en la tétrada sintomática.\n- Radiografía de abdomen (de pie y decúbito): Niveles hidroaéreos, imagen en "pila de monedas".\n- TC de abdomen y pelvis: Gold standard. Confirma el diagnóstico, localiza el nivel y la causa, y valora signos de sufrimiento vascular.', tratamiento: '- Médico (inicial): Ayuno, Sonda Nasogástrica (SNG) para descompresión, hidratación IV, corrección de desequilibrios hidroelectrolíticos.\n- Quirúrgico: Indicado en estrangulación, oclusión completa que no cede, o causa que lo amerite (ej. tumor). Se busca levantar el obstáculo y restablecer el tránsito.', pronostico: '- Complicaciones: Isquemia, necrosis, perforación, sepsis.\n- Pronóstico: Depende de la causa y de la presencia de compromiso vascular (mayor mortalidad).' } },
    { id: 'apendicitis_aguda', name: 'Apendicitis Aguda', mortality: 3, severity: 'Urgencia', viewed: false, details: { clinica: '- Cronología de Murphy: Dolor epigástrico que migra a Fosa Ilíaca Derecha (FID), anorexia, náuseas/vómitos, y fiebre.\n- Examen Físico: Dolor a la palpación en punto de McBurney, signo de Blumberg (+), defensa muscular.', fisiopatologia: '- Obstrucción de la luz apendicular: generalmente por un fecalito o hiperplasia linfoide.\n- Esto causa distensión, sobrecrecimiento bacteriano, inflamación, compromiso vascular, isquemia y finalmente, perforación.', diagnostico: '- Clínico: Es el pilar fundamental. El Score de Alvarado puede ser de ayuda.\n- Laboratorio: Leucocitosis con neutrofilia (puede ser normal).\n- Imagen: Ecografía (apéndice >6mm, no compresible, líquido periapendicular). TC es el estudio de elección en casos de duda.', tratamiento: '- Apendicectomía: es el tratamiento definitivo. El abordaje laparoscópico es el de elección.\n- Se asocia tratamiento antibiótico.', pronostico: '- Pronóstico: Excelente si no está complicada. La mortalidad aumenta significativamente con la perforación.\n- Complicaciones: Perforación, peritonitis (localizada o difusa), plastrón apendicular, absceso.' } },
    { id: 'colecistitis_aguda', name: 'Colecistitis Aguda', mortality: 5, severity: 'Urgencia', viewed: false, details: { clinica: '- Dolor abdominal: constante por más de 6 horas en Hipocondrio Derecho (HD) o epigastrio, a menudo post-ingesta grasa, puede irradiar a dorso.\n- Fiebre, náuseas, vómitos.\n- Examen Físico: Signo de Murphy (+).', fisiopatologia: '- Obstrucción sostenida del conducto cístico: en el 90-95% por un cálculo (litiásica).\n- La obstrucción lleva a distensión vesicular, edema de la pared, inflamación y compromiso vascular (isquemia).\n- La infección bacteriana es un evento secundario.', diagnostico: '- Clínico: Basado en el dolor característico y el Signo de Murphy.\n- Laboratorio: Leucocitosis. Puede haber leve aumento de bilirrubina y enzimas hepáticas.\n- Ecografía abdominal: Método de elección. Muestra cálculos, engrosamiento de la pared vesicular (>3mm), líquido perivesicular, Murphy ecográfico (+).', tratamiento: '- Tratamiento inicial: Médico (ingreso, ayuno, hidratación IV, analgesia, antibióticos).\n- Tratamiento definitivo: Colecistectomía laparoscópica de forma precoz (dentro de las primeras 96 horas).', pronostico: '- Complicaciones: Piocolecisto (empiema), gangrena, perforación, fístulas bilio-digestivas, peritonitis biliar (bilisperitoneo).' } },
    { id: 'peritonitis_aguda', name: 'Peritonitis Aguda', mortality: 25, severity: 'Emergencia', viewed: false, details: { clinica: '- Dolor abdominal: intenso, continuo, generalizado, que empeora con el movimiento.\n- "Ventre en tabla": Contractura muscular abdominal involuntaria y generalizada.\n- Generales: Fiebre alta, taquicardia, hipotensión, facies tóxica. Íleo paralítico con silencio abdominal.', fisiopatologia: '- Inflamación de la serosa peritoneal: por un agente infeccioso (peritonitis secundaria por perforación de víscera hueca, la más común) o químico (jugo gástrico, bilis, orina).\n- Se produce un gran secuestro de líquido ("tercer espacio"), llevando a hipovolemia, shock y fallo multiorgánico (FOM).', diagnostico: '- Diagnóstico CLÍNICO.\n- Laboratorio: Leucocitosis, acidosis metabólica, procalcitonina elevada.\n- Radiografía de tórax/abdomen (de pie): Puede mostrar neumoperitoneo (signo de Jovert) si la causa es una perforación.\n- TC de abdomen: Identifica la causa y la extensión.', tratamiento: '- Emergencia médico-quirúrgica.\n- 1. Reanimación: ABC, fluidoterapia agresiva, soporte hemodinámico.\n- 2. Antibioticoterapia IV de amplio espectro.\n- 3. Cirugía urgente: Laparotomía exploradora para controlar el foco infeccioso (sutura, resección) y realizar una exhaustiva toilette peritoneal.', pronostico: '- Pronóstico: Grave, con mortalidad elevada (10-40%) que depende de la causa, el tiempo de evolución y el estado del paciente.\n- Complicaciones: Sepsis, shock séptico, FOM, abscesos intraabdominales.' } },
    { id: 'colangitis_aguda', name: 'Colangitis Aguda', mortality: 10, severity: 'Emergencia', viewed: false, details: { clinica: '- Tríada de Charcot (60-70%): Fiebre con chuchos, ictericia y dolor en HD/epigastrio.\n- Pentada de Reynolds (5%): Tríada de Charcot + shock séptico y alteración de la conciencia.', fisiopatologia: '- Obstrucción de la vía biliar principal + infección bacteriana.\n- La obstrucción (generalmente por coledocolitiasis) causa estasis biliar. La infección bacteriana (generalmente ascendente desde el duodeno) en un sistema obstruido eleva la presión, causando pasaje de bacterias a la sangre (bacteriemia) y sepsis.', diagnostico: '- Diagnóstico: Sospecha clínica + Guías de Tokio (inflamación sistémica, colestasis e imagen).\n- Laboratorio: Leucocitosis, ↑PCR, ↑Bilirrubina, ↑Fosfatasa Alcalina, ↑GGT.\n- Ecografía: Dilatación de la vía biliar.\n- Colangio-RM: Confirma la coledocolitiasis (no invasiva).\n- CPRE: Diagnóstica y terapéutica.', tratamiento: '- Tratamiento inicial: Ingreso, ATB IV.\n- Drenaje biliar urgente: Es el pilar del tratamiento. De elección mediante CPRE con papilotomía y extracción de cálculos. Se indica de emergencia si hay sepsis/shock o si no mejora con ATB en 24-48h.\n- Tratamiento definitivo: Colecistectomía para eliminar el foco litógeno.', pronostico: '- Pronóstico: Potencialmente mortal si no se realiza el drenaje biliar a tiempo.\n- Complicaciones: Sepsis, shock séptico, abscesos hepáticos, FOM.' } },
    { id: 'pancreatitis_aguda', name: 'Pancreatitis Aguda', mortality: 30, severity: 'Grave', viewed: false, details: { clinica: '- Dolor abdominal: súbito, muy intenso, en epigastrio, transfixiante, irradiado "en barra" o "en cinturón" al dorso.\n- Alivia parcialmente en posición "mahometana".\n- Náuseas y vómitos frecuentes.', fisiopatologia: '- Activación prematura de enzimas pancreáticas dentro del páncreas, llevando a la autodigestión de la glándula y a una respuesta inflamatoria sistémica (SIRS).\n- Causas principales: Litiasis biliar (75%) y alcohol (12%).', diagnostico: '- Se requieren 2 de 3 criterios:\n1. Clínica compatible.\n2. Amilasa y/o lipasa sérica > 3 veces el valor normal.\n3. Hallazgos característicos en imagen.\n- TC con contraste IV: Gold standard para evaluar la gravedad (necrosis) y complicaciones locales. Se realiza después de las 72h.', tratamiento: '- Tratamiento médico de soporte:\n  - Ayuno.\n  - Fluidoterapia IV agresiva.\n  - Analgesia (opioides).\n- No se indican ATB de forma profiláctica.\n- CPRE precoz: solo si hay colangitis asociada.\n- Colecistectomía: diferida, antes del alta, en pancreatitis de origen biliar.', pronostico: '- Clasificación: Leve (80%) o Grave (20%).\n- Complicaciones locales: Colecciones líquidas, pseudoquiste, necrosis (estéril o infectada).\n- Complicaciones sistémicas: SIRS, FOM.\n- Pronóstico: La necrosis infectada aumenta drásticamente la mortalidad.' } },
    { id: 'ulcera_peptica_complicada', name: 'Úlcera Péptica Complicada', mortality: 15, severity: 'Urgencia', viewed: false, details: { clinica: '- Hemorragia (más frecuente): Hematemesis y/o melenas. Anemia.\n- Perforación: Dolor súbito, muy intenso ("en puñalada"), abdomen en tabla.\n- Estenosis (Sd. Pilórico): Vómitos postprandiales, saciedad precoz, pérdida de peso.\n- Penetración: Cambio del patrón del dolor, se hace continuo e irradia a dorso.', fisiopatologia: '- Hemorragia: Erosión de un vaso en la base de la úlcera.\n- Perforación: La úlcera atraviesa todas las capas de la pared gastroduodenal, comunicando la luz con el peritoneo libre.\n- Estenosis: Fibrosis y edema por ciclos de ulceración-cicatrización que obstruyen el píloro.\n- Penetración: La úlcera perfora pero queda contenida por un órgano adyacente (páncreas, hígado).', diagnostico: '- Endoscopia (FGC): Diagnóstica y terapéutica para hemorragia y estenosis.\n- Radiografía de tórax/abdomen de pie: Busca neumoperitoneo en la perforación.\n- Estudio baritado/TC: Para estenosis o sospecha de penetración.', tratamiento: '- Hemorragia: Tratamiento endoscópico (inyección, clips, termo-coagulación) + IBP IV. Cirugía si falla la endoscopia.\n- Perforación: Cirugía de urgencia (rafia simple + epiploplastia).\n- Estenosis: Tratamiento médico inicial (SNG, IBP). Si no resuelve, dilatación endoscópica o cirugía (gastrectomía).', pronostico: '- Pronóstico: La perforación y la hemorragia masiva tienen una mortalidad significativa.' } },
    { id: 'patologia_anorrectal', name: 'Patología Anorrectal Benigna', mortality: 0, severity: 'Leve', viewed: false, details: { clinica: '- Enfermedad Hemorroidal: Rectorragia (sangre roja que gotea al final), prolapso, prurito. Trombosis externa: nódulo perianal muy doloroso.\n- Fisura Anal: Dolor intenso post-defecatorio, sangrado escaso. Suele haber hipertonía esfinteriana.\n- Absceso/Fístula: Dolor perianal pulsátil, fiebre, tumefacción. La fístula se manifiesta por supuración crónica o intermitente.', fisiopatologia: '- Hemorroides: Dilatación de los plexos venosos por aumento de la presión intraabdominal (esfuerzo defecatorio, embarazo).\n- Fisura: Desgarro del anodermo por heces duras, perpetuado por un círculo vicioso de dolor -> espasmo esfinteriano -> isquemia.\n- Absceso/Fístula: Infección de las glándulas anales (criptoglandular). El absceso es la fase aguda y la fístula es la cronificación (trayecto epitelizado).', diagnostico: '- Diagnóstico CLÍNICO mediante inspección anoperineal y tacto rectal.\n- Anoscopia/Rectoscopia: para valorar hemorroides internas y descartar otras patologías.\n- Ecografía endoanal/RM: para fístulas complejas.', tratamiento: '- Hemorroides: Médico (dieta rica en fibra, baños de asiento, flebotónicos). Instrumental (ligadura con bandas). Quirúrgico (hemorroidectomía).\n- Fisura: Médico (relajantes musculares tópicos - nitroglicerina, diltiazem). Quirúrgico (esfinterotomía lateral interna).\n- Absceso: Drenaje quirúrgico + ATB.\n- Fístula: Quirúrgico (fistulotomía, fistulectomía, colocación de sedal).', pronostico: '- Pronóstico: Generalmente bueno.\n- Complicaciones Cirugía: Incontinencia (riesgo en esfinterotomía y fistulotomías complejas), estenosis anal, recidiva.' } },
    { id: 'politraumatizado', name: 'Politraumatizado', mortality: 40, severity: 'Crítico', viewed: false, details: { clinica: '- Múltiples lesiones traumáticas que, en conjunto, ponen en riesgo la vida del paciente.\n- Puede presentar shock (hipovolémico, obstructivo), insuficiencia respiratoria, TEC.', fisiopatologia: '- Daño tisular por transferencia de energía (cinética, mecánica, etc.).\n- Desencadena la "tríada de la muerte": acidosis, hipotermia y coagulopatía.', diagnostico: '- Evaluación Primaria (ABCDE): Identificación y tratamiento inmediato de lesiones que amenazan la vida.\n- Adjuntos: Eco-FAST, Rx de tórax y pelvis.\n- Evaluación Secundaria: Examen detallado de cabeza a pies, una vez estabilizado.\n- TC "Body Scan": para un diagnóstico lesional completo.', tratamiento: '- Manejo sistemático según ATLS (ABCDE):\n A: Vía aérea permeable con control cervical.\n B: Ventilación y oxigenación.\n C: Control de hemorragias, reanimación con fluidos y hemoderivados.\n D: Evaluación neurológica (Glasgow, pupilas).\n E: Exposición completa, prevención de hipotermia.\n- Tratamiento definitivo de cada lesión.', pronostico: '- Pronóstico: Depende de la severidad de las lesiones (escalas como ISS), la edad, comorbilidades y la calidad de la atención inicial ("hora de oro").\n- Complicaciones: Muerte por hemorragia exanguinante, TEC grave o FOM.' } },
    { id: 'trauma_torax', name: 'Trauma de Tórax', mortality: 25, severity: 'Crítico', viewed: false, details: { clinica: '- Dolor, disnea, taquipnea, enfisema subcutáneo, movimiento paradójico (volet), ingurgitación yugular, hipotensión.', fisiopatologia: '- La hipoxia es la consecuencia fisiopatológica más grave.\n- Puede ser por alteración V/Q (contusión), colapso pulmonar (neumotórax), ocupación por sangre (hemotórax) o fallo de bomba (taponamiento cardíaco).', diagnostico: '- Clínico (Evaluación Primaria): Identificar las 6 lesiones letales inmediatas: Neumotórax a tensión, Neumotórax abierto, Hemotórax masivo, Taponamiento cardíaco, Volet costal con contusión pulmonar, Obstrucción de vía aérea.\n- Rx de Tórax y Eco-FAST: fundamentales en la emergencia.', tratamiento: '- Manejo según ABCDE.\n- Tubo de tórax (drenaje pleural): para neumotórax y hemotórax.\n- Aguja de descompresión: para neumotórax a tensión.\n- Pericardiocentesis/Toracotomía: para taponamiento cardíaco.\n- Analgesia y soporte ventilatorio: para volet costal.', pronostico: '- Pronóstico: El 85% de las lesiones torácicas se resuelven con medidas simples (analgesia, oxígeno, tubo torácico). Solo un 10-15% requiere toracotomía.' } },
    { id: 'trauma_abdomen_pelvis', name: 'Trauma de Abdomen y Pelvis', mortality: 20, severity: 'Emergencia', viewed: false, details: { clinica: '- Dolor, distensión, defensa o contractura abdominal.\n- Equimosis (cinturón de seguridad, Grey-Turner, Cullen), heridas penetrantes.\n- Shock hipovolémico por hemorragia interna.', fisiopatologia: '- Hemorragia: por lesión de órganos sólidos (bazo, hígado) o grandes vasos.\n- Peritonitis: por lesión de vísceras huecas (intestino, colon).\n- Fracturas de pelvis: pueden causar sangrado masivo retroperitoneal.', diagnostico: '- Paciente inestable: Eco-FAST para detectar líquido libre (hemoperitoneo). Laparotomía exploradora si es positivo y hay shock.\n- Paciente estable: TC de abdomen y pelvis con contraste IV es el gold standard.\n- LPD (Lavado Peritoneal Diagnóstico): útil si el FAST no está disponible o no es concluyente.', tratamiento: '- Manejo según ATLS.\n- Laparotomía de emergencia: indicada en inestabilidad hemodinámica con hemoperitoneo, peritonitis, evisceración o lesión de víscera hueca.\n- Manejo no operatorio (MNO): posible en lesiones de órganos sólidos en pacientes hemodinámicamente estables y bajo estricta vigilancia en CTI.\n- Fractura de pelvis inestable: estabilización externa (sábana, faja pélvica), angiografía con embolización.', pronostico: '- Pronóstico: La hemorragia no controlada es la principal causa de muerte prevenible.\n- Complicaciones: Abscesos, fístulas, oclusión intestinal por adherencias.' } },
    { id: 'infecciones_mano', name: 'Infecciones de la Mano', mortality: 1, severity: 'Urgencia', viewed: false, details: { clinica: '- Signos de Kanavel (Tenosinovitis): Dedo en semiflexión (gatillo), tumefacción fusiforme del dedo, dolor a la palpación del trayecto de la vaina, dolor exquisito a la extensión pasiva.\n- Panadizo: Dolor pulsátil intenso, tumefacción a tensión del pulpejo.', fisiopatologia: '- Inoculación bacteriana (más común S. aureus) por microtraumatismos.\n- La anatomía compartimental de la mano favorece el aumento de presión, la isquemia y la necrosis tisular rápida.', diagnostico: '- Diagnóstico CLÍNICO. La localización y los signos específicos orientan al espacio afectado (pulpejo, vaina tendinosa, espacios palmares profundos).', tratamiento: '- Tratamiento es una URGENCIA.\n- Fase inflamatoria (sin pus): Inmovilización en posición funcional, elevación, ATB.\n- Fase supurada: Drenaje quirúrgico amplio y precoz, bajo anestesia adecuada y campo exangüe.', pronostico: '- Pronóstico: Bueno si se trata precozmente.\n- Complicaciones: Rigidez, adherencias tendinosas, necrosis, amputación, diseminación de la infección (mano -> antebrazo).' } },
    { id: 'infecciones_partes_blandas', name: 'Infecciones Graves de Partes Blandas', mortality: 60, severity: 'Crítico', viewed: false, details: { clinica: '- Dolor desproporcionado a los hallazgos cutáneos.\n- Edema tenso que sobrepasa el eritema, flictenas hemorrágicas, anestesia cutánea (por necrosis de nervios), crepitación (gas).\n- Signos sistémicos: Fiebre, taquicardia, hipotensión, shock tóxico.', fisiopatologia: '- Infección polimicrobiana (sinergia entre aerobios y anaerobios) que se disemina rápidamente por planos fasciales profundos.\n- Producción de toxinas y enzimas que causan trombosis vascular, isquemia y necrosis extensa del tejido celular subcutáneo y la fascia.', diagnostico: '- ALTO ÍNDICE DE SOSPECHA CLÍNICA.\n- Cualquier celulitis que evoluciona rápidamente con signos de toxicidad sistémica debe hacer sospecharla.\n- TC/RM: puede mostrar gas en los tejidos.\n- El diagnóstico definitivo y la estadificación se hacen en el quirófano.', tratamiento: '- Emergencia Quirúrgica Absoluta.\n- 1. Cirugía: Desbridamiento quirúrgico radical y agresivo de todo el tejido necrótico, con re-exploraciones programadas cada 24-48h.\n- 2. Soporte en CTI: manejo del shock, ATB de amplio espectro IV.\n- 3. Oxígeno Hiperbárico: puede ser un adyuvante.', pronostico: '- Pronóstico: Muy grave, con mortalidad elevada (hasta 50-75%) incluso con tratamiento óptimo.\n- Complicaciones: Amputación, secuelas funcionales y estéticas masivas, FOM, muerte.' } },
    { id: 'occlusion_arterial_aguda', name: 'Oclusión Arterial Aguda', mortality: 15, severity: 'Emergencia', viewed: false, details: { clinica: '- Las 6 "P" de la isquemia aguda:\n  - Pain (Dolor súbito e intenso)\n  - Pallor (Palidez)\n  - Pulselessness (Ausencia de pulsos)\n  - Poikilothermia (Frialdad)\n  - Paresthesia (Parestesias)\n  - Paralysis (Parálisis)', fisiopatologia: '- Interrupción brusca del flujo sanguíneo arterial a una extremidad.\n- Causas:\n  - Embolia (más frecuente): Un coágulo (generalmente de origen cardíaco, ej. Fibrilación Auricular) viaja y se enclava en una arteria sana.\n  - Trombosis: Un coágulo se forma localmente sobre una placa de aterosclerosis preexistente.', diagnostico: '- Diagnóstico CLÍNICO.\n- Eco-Doppler arterial: Confirma la ausencia de flujo y localiza la obstrucción. Diferencia embolia de trombosis.\n- Arteriografía: se realiza si se planea tratamiento endovascular o la localización es incierta.', tratamiento: '- Emergencia Vascular.\n- 1. Anticoagulación sistémica inmediata: con Heparina Sódica IV.\n- 2. Revascularización urgente:\n  - Quirúrgica (de elección): Embolectomía con catéter de Fogarty.\n  - Endovascular: Trombolisis, tromboaspiración.\n- 3. Fasciotomía: si se desarrolla un síndrome compartimental post-reperfusión.', pronostico: '- Viabilidad del miembro en riesgo. "Tiempo es músculo". Daño irreversible en 4-6 horas.\n- Pronóstico: Mortalidad del 10-20%, tasa de amputación del 5-30%.\n- Complicación: Síndrome de isquemia-reperfusión (lesión tisular paradójica al restaurar el flujo, con liberación de metabolitos tóxicos que causan FOM).' } }
];
const sortedPatologiasData = [...patologiasData].sort((a,b) => a.name.localeCompare(b.name));
const patologiasSeverityColors = { 'Crítico': 'bg-red-500', 'Emergencia': 'bg-orange-500', 'Urgencia': 'bg-amber-500', 'Grave': 'bg-yellow-500', 'Leve': 'bg-sky-500' };
const patologiasIconMap = { clinica: '🩺', fisiopatologia: '🔬', diagnostico: '💻', tratamiento: '💊', pronostico: '📈' };

const clinicaQuirurgicaData = [
    {
        id: 'cq_abdomen_agudo_g', name: 'Abdomen Agudo General', viewed: false,
        details: {
            definicion: 'Concepto: Síndrome clínico con dolor abdominal como síntoma predominante, de inicio agudo, que requiere un diagnóstico rápido y preciso para determinar si el tratamiento es médico o quirúrgico urgente.\nEtiologías frecuentes: Apendicitis, colecistitis, pancreatitis, obstrucción intestinal, úlcera péptica perforada, diverticulitis, patología ginecológica (embarazo ectópico, torsión ovárica), causas vasculares (isquemia mesentérica).',
            clasificacion: 'Según su causa:\n- Inflamatorio: Apendicitis, colecistitis, diverticulitis, pancreatitis.\n- Perforativo: Úlcera perforada, perforación intestinal.\n- Obstructivo: Bridas, hernias, vólvulos, tumores.\n- Hemorrágico: Aneurisma aórtico roto, embarazo ectópico roto, traumatismo.\n- Vascular: Isquemia/infarto mesentérico.',
            enfoque_diagnostico: '1. Anamnesis: Inicio, localización, irradiación, características del dolor. Síntomas asociados (vómitos, fiebre, diarrea, constipación, síntomas urinarios/ginecológicos). Antecedentes.\n2. Examen Físico: Signos vitales. Inspección (distensión, cicatrices). Auscultación (ruidos hidroaéreos). Palpación (localización del dolor, defensa, contractura, masas, signos específicos como Murphy, Blumberg, McBurney). Percusión (timpanismo, matidez). Tacto rectal/vaginal.\n3. Estudios Complementarios: Laboratorio (hemograma, función renal, hepatograma, amilasa/lipasa, examen de orina, prueba de embarazo). Imágenes (Rx de tórax y abdomen de pie, Ecografía abdominal, TC de abdomen y pelvis con contraste).',
            manejo_inicial: 'Estabilización hemodinámica (ABC), ayuno, SNG si hay vómitos o distensión, hidratación IV, analgesia (con precaución para no enmascarar el cuadro), antibióticos si se sospecha infección. Interconsulta con cirugía.'
        }
    },
    {
        id: 'cq_cicatrizacion', name: 'Cicatrización de Heridas', viewed: false,
        details: {
            fases_cicatrizacion: '1. Fase Inflamatoria (hemostasia e inflamación): Inmediata a 2-5 días. Vasoconstricción inicial, luego vasodilatación. Formación del coágulo. Llegada de neutrófilos y macrófagos.\n2. Fase Proliferativa (o de granulación): Día 3 a 3 semanas. Angiogénesis (formación de nuevos vasos). Fibroplasia (síntesis de colágeno por fibroblastos). Formación de tejido de granulación. Epitelización (migración de queratinocitos).\n3. Fase de Maduración (o remodelación): Semana 3 hasta 1-2 años. Reorganización del colágeno (de tipo III a tipo I). Aumento de la fuerza tensil de la herida. Regresión vascular.',
            factores_que_afectan: 'Locales: Infección (principal causa de retraso), isquemia/hipoxia, hematoma/seroma, cuerpo extraño, técnica quirúrgica deficiente, radiación.\nSistémicos: Edad avanzada, malnutrición (déficit proteico, vitaminas A, C, Zinc), enfermedades crónicas (diabetes, uremia, ictericia), medicamentos (corticoides, AINEs, quimioterapia), tabaquismo, obesidad.',
            tipos_de_cicatrizacion: 'Por Primera Intención (Primaria): Bordes de la herida limpios, afrontados directamente (sutura, grapas). Cicatriz mínima.\nPor Segunda Intención (Secundaria): Herida abierta, se deja granular y epitelizar espontáneamente. Heridas contaminadas, con pérdida de sustancia. Cicatriz más grande y contracción.\nPor Tercera Intención (Cierre Primario Diferido): Herida inicialmente contaminada, se deja abierta para manejo y se cierra quirúrgicamente días después, una vez limpia.',
            cicatrizacion_patologica: 'Cicatriz Hipertrófica: Exceso de colágeno, elevada, roja, pruriginosa, pero NO sobrepasa los límites de la herida original. Puede regresar.\nQueloide: Crecimiento exagerado de tejido cicatricial que SÍ sobrepasa los límites de la herida. Más frecuente en ciertas razas y localizaciones. No regresa espontáneamente, alta recidiva post-extirpación.'
        }
    },
];
const sortedClinicaQuirurgicaData = [...clinicaQuirurgicaData].sort((a,b) => a.name.localeCompare(b.name));
const cqIconMap = { definicion: '📖', clasificacion: '📊', enfoque_diagnostico: '🔍', manejo_inicial: '🚑', fases_cicatrizacion: '🔄', factores_que_afectan: '⚠️', tipos_de_cicatrizacion: '🩹', cicatrizacion_patologica: '❗'};

// DOM Elements - Views
const landingView = document.getElementById('landing-view');
const sixthYearView = document.getElementById('sixth-year-view');
const yearPlaceholderMessage = document.getElementById('year-placeholder-message');

// DOM Elements - Patologías Quirúrgicas
const patologiasModule = document.getElementById('patologias-quirurgicas-module');
const pqNavContainer = document.getElementById('pathology-nav');
const pqDetailsContainer = document.getElementById('pathology-details');
const pqWelcomeView = document.getElementById('welcome-view-patologias');
const pqProgressTrackerContainer = document.getElementById('progress-tracker');
const pqMobileMenuToggle = document.getElementById('mobile-menu-toggle');
const pqMenuArrow = document.getElementById('menu-arrow');
const pqMortalityChartCanvas = document.getElementById('mortalityChart') as HTMLCanvasElement | null;

// DOM Elements - Clínica Quirúrgica
const clinicaQuirurgicaModule = document.getElementById('clinica-quirurgica-module');
const cqNavContainer = document.getElementById('cq-nav');
const cqDetailsContainer = document.getElementById('cq-details');
const cqWelcomeView = document.getElementById('cq-welcome-view');
const cqProgressTrackerContainer = document.getElementById('cq-progress-tracker');
const cqMobileMenuToggle = document.getElementById('cq-mobile-menu-toggle');
const cqMenuArrow = document.getElementById('cq-menu-arrow');
// const cqChartCanvas = document.getElementById('cq-chart'); // If CQ gets a chart

let currentActiveModule: 'patologias' | 'clinica' | null = null;
let activeData: any[] = []; // Consider defining a more specific type if possible
let activeSortedData: any[] = []; // Consider defining a more specific type


function showView(viewId: 'landing' | 'sixthYear') {
    landingView?.classList.toggle('hidden', viewId !== 'landing');
    sixthYearView?.classList.toggle('hidden', viewId !== 'sixthYear');
    if (viewId === 'landing') {
        currentActiveModule = null;
        document.querySelectorAll('.subject-button').forEach(btn => btn.classList.remove('active'));
        patologiasModule?.classList.add('hidden');
        clinicaQuirurgicaModule?.classList.add('hidden');
    }
}

function activateSubjectModule(subject: 'patologias' | 'clinica') {
    currentActiveModule = subject;
    patologiasModule?.classList.toggle('hidden', subject !== 'patologias');
    clinicaQuirurgicaModule?.classList.toggle('hidden', subject !== 'clinica');

    document.querySelectorAll('#sixth-year-subject-navigation .subject-button').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-subject') === (subject === 'patologias' ? 'patologias_quirurgicas' : 'clinica_quirurgica'));
    });

    if (subject === 'patologias') {
        activeData = patologiasData;
        activeSortedData = sortedPatologiasData;
        if (!pqNavContainer?.innerHTML.trim()) { // Initialize only if not already done
            initializeModule('patologias');
        }
        pqWelcomeView?.classList.remove('hidden');
        pqDetailsContainer?.classList.add('hidden');
    } else if (subject === 'clinica') {
        activeData = clinicaQuirurgicaData;
        activeSortedData = sortedClinicaQuirurgicaData;
         if (!cqNavContainer?.innerHTML.trim()) { // Initialize only if not already done
            initializeModule('clinica');
        }
        cqWelcomeView?.classList.remove('hidden');
        cqDetailsContainer?.classList.add('hidden');
    }
}

function initializeModule(moduleName: 'patologias' | 'clinica') {
    if (moduleName === 'patologias') {
        renderSubjectNavigation(sortedPatologiasData, pqNavContainer, handleNavItemClick, patologiasSeverityColors, 'patologias');
        renderSubjectProgressTracker(sortedPatologiasData, pqProgressTrackerContainer, handleProgressCheckboxChange, 'patologias');
        updateSubjectProgress('patologias');
        if (pqMortalityChartCanvas) renderPatologiasMortalityChart();
        addMobileMenuToggleListener(pqMobileMenuToggle, pqNavContainer, pqMenuArrow);
    } else if (moduleName === 'clinica') {
        renderSubjectNavigation(sortedClinicaQuirurgicaData, cqNavContainer, handleNavItemClick, {}, 'clinica'); // No severity colors for CQ
        renderSubjectProgressTracker(sortedClinicaQuirurgicaData, cqProgressTrackerContainer, handleProgressCheckboxChange, 'clinica');
        updateSubjectProgress('clinica');
        // renderClinicaChart(); // If CQ gets a chart
        addMobileMenuToggleListener(cqMobileMenuToggle, cqNavContainer, cqMenuArrow);
    }
}

function renderSubjectNavigation(
    data: any[],
    navContainer: HTMLElement | null,
    itemClickHandler: (itemId: string, moduleName: 'patologias' | 'clinica') => void,
    severityColors: Record<string, string>,
    moduleName: 'patologias' | 'clinica'
) {
    if (!navContainer) return;
    let navHtml = '';
    data.forEach(item => {
        const severityBadge = item.severity ? `<span class="text-xs px-2 py-0.5 rounded-full text-white ${severityColors[item.severity] || 'bg-slate-400'}">${item.severity}</span>` : '';
        navHtml += `
            <a href="#" class="nav-item flex items-center justify-between px-3 py-2.5 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" data-id="${item.id}" role="button" aria-label="Seleccionar ${item.name}">
                <span>${item.name}</span>
                ${severityBadge}
            </a>
        `;
    });
    navContainer.innerHTML = navHtml;
    
    navContainer.querySelectorAll('.nav-item').forEach(navLink => {
        navLink.addEventListener('click', (e) => {
            e.preventDefault();
            const itemId = navLink.getAttribute('data-id');
            if (itemId) {
                itemClickHandler(itemId, moduleName);
                if (window.innerWidth < 768) { // md breakpoint
                    const currentMobileMenuToggle = moduleName === 'patologias' ? pqMobileMenuToggle : cqMobileMenuToggle;
                    const currentNavContainer = moduleName === 'patologias' ? pqNavContainer : cqNavContainer;
                    const currentMenuArrow = moduleName === 'patologias' ? pqMenuArrow : cqMenuArrow;
                    
                    currentNavContainer?.classList.add('hidden');
                    currentMobileMenuToggle?.setAttribute('aria-expanded', 'false');
                    if (currentMenuArrow) (currentMenuArrow as HTMLElement).style.transform = 'rotate(0deg)';
                }
            }
        });
    });
}

function renderSubjectProgressTracker(
    data: any[],
    progressContainer: HTMLElement | null,
    checkboxChangeHandler: (itemId: string, isChecked: boolean, moduleName: 'patologias' | 'clinica') => void,
    moduleName: 'patologias' | 'clinica'
) {
    if (!progressContainer) return;
    const totalCount = data.length;
    const checklistId = `${moduleName}-progress-checklist`;
    const progressBarContainerId = `${moduleName}-progress-bar-container`;
    const progressBarId = `${moduleName}-progress-bar`;
    const progressTextId = `${moduleName}-progress-text`;
    const progressHeadingId = `${moduleName}-progress-heading`;

    let checklistHtml = `
        <h3 class="text-base font-semibold text-slate-900 mb-2" id="${progressHeadingId}">Progreso de Estudio</h3>
        <div class="flex items-center mb-2">
            <div id="${progressBarContainerId}" class="w-full bg-slate-200 rounded-full h-2.5 mr-3" role="progressbar" aria-labelledby="${progressHeadingId}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="${totalCount}">
                <div id="${progressBarId}" class="bg-sky-600 h-2.5 rounded-full transition-all duration-300" style="width: 0%"></div>
            </div>
            <span id="${progressTextId}" class="text-sm font-medium text-slate-600" aria-live="polite">0/${totalCount}</span>
        </div>
        <div id="${checklistId}" class="max-h-32 overflow-y-auto pr-2" role="group" aria-labelledby="${progressHeadingId}">`;
    
    data.forEach(item => {
         checklistHtml += `
            <label for="${moduleName}-check-${item.id}" class="flex items-center text-sm text-slate-600 py-1 cursor-pointer">
                <input type="checkbox" id="${moduleName}-check-${item.id}" data-id="${item.id}" class="h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 mr-2">
                ${item.name}
            </label>
         `;
    });
    checklistHtml += `</div>`;
    progressContainer.innerHTML = checklistHtml;

    progressContainer.querySelectorAll(`#${checklistId} input[type="checkbox"]`).forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const target = e.target as HTMLInputElement;
            const itemId = target.getAttribute('data-id');
            if (itemId) {
                checkboxChangeHandler(itemId, target.checked, moduleName);
            }
        });
    });
    updateSubjectProgressAria(moduleName);
}

function updateSubjectProgressAria(moduleName: 'patologias' | 'clinica') {
    const data = moduleName === 'patologias' ? patologiasData : clinicaQuirurgicaData;
    const viewedCount = data.filter(p => p.viewed).length;
    const progressBarContainer = document.getElementById(`${moduleName}-progress-bar-container`);
    if (progressBarContainer) {
        progressBarContainer.setAttribute('aria-valuenow', viewedCount.toString());
    }
}

function updateSubjectProgress(moduleName: 'patologias' | 'clinica') {
    const data = moduleName === 'patologias' ? patologiasData : clinicaQuirurgicaData;
    const progressBarId = `${moduleName}-progress-bar`;
    const progressTextId = `${moduleName}-progress-text`;

    const viewedCount = data.filter(p => p.viewed).length;
    const totalCount = data.length;
    const percentage = totalCount > 0 ? (viewedCount / totalCount) * 100 : 0;

    const progressBar = document.getElementById(progressBarId);
    const progressText = document.getElementById(progressTextId);
    
    if (progressBar) progressBar.style.width = `${percentage}%`;
    if (progressText) progressText.textContent = `${viewedCount}/${totalCount}`;

    data.forEach(item => {
        const checkbox = document.getElementById(`${moduleName}-check-${item.id}`) as HTMLInputElement | null;
        if(checkbox) checkbox.checked = item.viewed;
    });
    updateSubjectProgressAria(moduleName);
}

function renderSubjectDetails(
    item: any, 
    detailsContainer: HTMLElement | null, 
    welcomeView: HTMLElement | null,
    iconMap: Record<string, string>,
    severityColors: Record<string, string>,
    moduleName: 'patologias' | 'clinica'
) {
    if (!item || !detailsContainer || !welcomeView) return;

    welcomeView.classList.add('hidden');
    detailsContainer.classList.remove('hidden');
    detailsContainer.setAttribute('aria-live', 'polite');

    const severityBadge = item.severity ? `<span class="text-sm font-semibold px-3 py-1 rounded-full text-white ${severityColors[item.severity] || 'bg-slate-400'}">${item.severity}</span>` : '';
    let detailsHtml = `
        <div class="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div class="flex justify-between items-start mb-4">
                <div>
                   <h3 class="text-2xl md:text-3xl font-bold text-slate-900" tabindex="-1">${item.name}</h3>
                   ${severityBadge}
                </div>
            </div>
            <div id="${moduleName}-accordion-container">
    `;

    for (const [key, value] of Object.entries(item.details)) {
        const title = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
        const sectionId = `accordion-section-${moduleName}-${item.id}-${key}`;
        const contentId = `accordion-content-${moduleName}-${item.id}-${key}`;
        detailsHtml += `
            <div class="border-b border-slate-200">
                <button class="accordion-toggle w-full flex justify-between items-center py-4 text-left font-semibold text-base md:text-lg text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" aria-expanded="false" aria-controls="${contentId}" id="${sectionId}">
                    <span>${iconMap[key] || '🔹'} ${title}</span>
                    <span class="accordion-icon transform transition-transform">▼</span>
                </button>
                <div id="${contentId}" class="accordion-content px-4 py-0 text-slate-600 whitespace-pre-line" role="region" aria-labelledby="${sectionId}">
                   ${value}
                </div>
            </div>
        `;
    }
    detailsHtml += `</div></div>`;
    detailsContainer.innerHTML = detailsHtml;
    
    const newHeading = detailsContainer.querySelector('h3');
    if (newHeading) newHeading.focus();
    
    detailsContainer.querySelectorAll('.accordion-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling as HTMLElement | null;
            const icon = button.querySelector('.accordion-icon') as HTMLElement | null;
            if (!content || !icon) return;
            const isOpening = !content.classList.contains('open');
            content.classList.toggle('open');
            button.setAttribute('aria-expanded', String(isOpening));
            icon.style.transform = isOpening ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    });
}

function handleNavItemClick(itemId: string, moduleName: 'patologias' | 'clinica') {
    const data = moduleName === 'patologias' ? patologiasData : clinicaQuirurgicaData;
    // const sortedData = moduleName === 'patologias' ? sortedPatologiasData : sortedClinicaQuirurgicaData; // Not used directly here
    const detailsContainer = moduleName === 'patologias' ? pqDetailsContainer : cqDetailsContainer;
    const welcomeView = moduleName === 'patologias' ? pqWelcomeView : cqWelcomeView;
    const navContainer = moduleName === 'patologias' ? pqNavContainer : cqNavContainer;
    const item = data.find(p => p.id === itemId);

    if (item) {
        if (!item.viewed) { 
            item.viewed = true;
            updateSubjectProgress(moduleName);
        }
    }
    const iconMapToUse = moduleName === 'patologias' ? patologiasIconMap : cqIconMap;
    const severityColorsToUse = moduleName === 'patologias' ? patologiasSeverityColors : {};
    renderSubjectDetails(item, detailsContainer, welcomeView, iconMapToUse, severityColorsToUse, moduleName);

    navContainer?.querySelectorAll('.nav-item').forEach(navLink => {
        if (navLink.getAttribute('data-id') === itemId) {
            navLink.classList.add('active');
            navLink.setAttribute('aria-current', 'page');
        } else {
            navLink.classList.remove('active');
            navLink.removeAttribute('aria-current');
        }
    });
}

function handleProgressCheckboxChange(itemId: string, isChecked: boolean, moduleName: 'patologias' | 'clinica') {
    const data = moduleName === 'patologias' ? patologiasData : clinicaQuirurgicaData;
    const item = data.find(p => p.id === itemId);
    if (item) {
        item.viewed = isChecked;
        updateSubjectProgress(moduleName);
    }
}

function addMobileMenuToggleListener(
    toggleButton: HTMLElement | null, 
    navContainer: HTMLElement | null, 
    menuArrow: HTMLElement | null
) {
    if (!toggleButton || !navContainer || !menuArrow) return;
    toggleButton.addEventListener('click', () => {
        const navIsHidden = navContainer.classList.toggle('hidden');
        toggleButton.setAttribute('aria-expanded', String(!navIsHidden));
        menuArrow.style.transform = navIsHidden ? 'rotate(0deg)' : 'rotate(180deg)';
    });
}

function renderPatologiasMortalityChart() {
    if (!pqMortalityChartCanvas) { return; }
    const ctx = pqMortalityChartCanvas.getContext('2d');
    if (!ctx) { return; }
    
    const chartData = [...patologiasData].filter(p => p.mortality !== undefined).sort((a,b) => (b.mortality ?? 0) - (a.mortality ?? 0));
    
    const existingChart = Chart.getChart(pqMortalityChartCanvas);
    if (existingChart) {
        existingChart.destroy();
    }
            
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartData.map(p => p.name.replace(/ /g, '\n')),
            datasets: [{
                label: 'Mortalidad Estimada (%) en Formas Graves/Complicadas',
                data: chartData.map(p => p.mortality),
                backgroundColor: chartData.map(p => {
                   if( (p.mortality ?? 0) >= 40) return 'rgba(220, 38, 38, 0.7)'; 
                   if( (p.mortality ?? 0) >= 20) return 'rgba(249, 115, 22, 0.7)'; 
                   if( (p.mortality ?? 0) >= 10) return 'rgba(245, 158, 11, 0.7)'; 
                   return 'rgba(14, 165, 233, 0.7)'; 
                }),
                borderColor: chartData.map(p => {
                   if( (p.mortality ?? 0) >= 40) return 'rgb(220, 38, 38)';
                   if( (p.mortality ?? 0) >= 20) return 'rgb(249, 115, 22)';
                   if( (p.mortality ?? 0) >= 10) return 'rgb(245, 158, 11)';
                   return 'rgb(14, 165, 233)';
                }),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'x', 
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Mortalidad Estimada (%)' },
                    ticks: { callback: function(value: string | number) { return value + '%'; } } 
                },
                x: { 
                    ticks: { 
                        autoSkip: false, 
                        maxRotation: 90, 
                        minRotation: 45,
                        font: { size: 10 } 
                    } 
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context: any) { // Consider using a more specific type from Chart.js if available
                            let label = context.dataset.label || '';
                            if (label) { label += ': '; }
                            if (context.parsed.y !== null) { label += context.parsed.y + '%'; }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Year navigation
    document.querySelectorAll('#year-navigation .year-button').forEach(button => {
        button.addEventListener('click', () => {
            const year = button.getAttribute('data-year');
            if (yearPlaceholderMessage) yearPlaceholderMessage.textContent = ''; 

            if (year === '6') {
                showView('sixthYear');
                // By default, activate patologias or the first available subject
                if (!currentActiveModule) { // Activate only if no module is active yet or coming back
                    activateSubjectModule('patologias');
                }
            } else {
                if (yearPlaceholderMessage) {
                    yearPlaceholderMessage.textContent = `Contenido para ${year}to año no disponible aún.`;
                }
            }
        });
    });

    // Back to landing
    document.getElementById('back-to-landing-button')?.addEventListener('click', () => {
        showView('landing');
        if (yearPlaceholderMessage) yearPlaceholderMessage.textContent = ''; 
    });

    // Sixth year subject navigation
    document.querySelectorAll('#sixth-year-subject-navigation .subject-button').forEach(button => {
        button.addEventListener('click', () => {
            const subject = button.getAttribute('data-subject');
            if (subject === 'patologias_quirurgicas') {
                activateSubjectModule('patologias');
            } else if (subject === 'clinica_quirurgica') {
                activateSubjectModule('clinica');
            }
        });
    });

    // Initial state
    showView('landing');

    // Basic null checks for critical initial elements
    if (!landingView || !sixthYearView ) {
         console.error("Critical view elements are missing from the DOM. Application initialization aborted.");
         document.body.innerHTML = '<p style="color: red; text-align: center; padding: 20px;">Error: La aplicación no pudo cargarse correctamente. Faltan vistas esenciales.</p>';
         return;
    }
     if (!patologiasModule || !clinicaQuirurgicaModule) {
        console.error("Subject module containers are missing.");
        return;
    }
});
