const translation = {
  common: {
    undo: 'Annulla',
    redo: 'Ripeti',
    editing: 'Modifica in corso',
    autoSaved: 'Salvataggio automatico',
    unpublished: 'Non pubblicato',
    published: 'Pubblicato',
    publish: 'Pubblica',
    update: 'Aggiorna',
    run: 'Esegui',
    running: 'In esecuzione',
    inRunMode: 'In modalità di esecuzione',
    inPreview: 'In anteprima',
    inPreviewMode: 'In modalità anteprima',
    preview: 'Anteprima',
    viewRunHistory: 'Visualizza cronologia esecuzioni',
    runHistory: 'Cronologia esecuzioni',
    goBackToEdit: 'Torna all\'editor',
    conversationLog: 'Registro conversazioni',
    features: 'Caratteristiche',
    debugAndPreview: 'Anteprima',
    restart: 'Riavvia',
    currentDraft: 'Bozza corrente',
    currentDraftUnpublished: 'Bozza corrente non pubblicata',
    latestPublished: 'Ultimo pubblicato',
    publishedAt: 'Pubblicato',
    restore: 'Ripristina',
    runApp: 'Esegui App',
    batchRunApp: 'Esegui App in Batch',
    accessAPIReference: 'Accedi alla Riferimento API',
    embedIntoSite: 'Incorpora nel Sito',
    addTitle: 'Aggiungi titolo...',
    addDescription: 'Aggiungi descrizione...',
    noVar: 'Nessuna variabile',
    searchVar: 'Cerca variabile',
    variableNamePlaceholder: 'Nome variabile',
    setVarValuePlaceholder: 'Imposta variabile',
    needConnectTip: 'Questo passaggio non è collegato a nulla',
    maxTreeDepth: 'Limite massimo di {{depth}} nodi per ramo',
    needEndNode: 'Deve essere aggiunto il blocco di Fine',
    needAnswerNode: 'Deve essere aggiunto il blocco di Risposta',
    workflowProcess: 'Processo di flusso di lavoro',
    notRunning: 'Non ancora in esecuzione',
    previewPlaceholder:
      'Inserisci contenuto nella casella sottostante per avviare il debug del Chatbot',
    effectVarConfirm: {
      title: 'Rimuovi Variabile',
      content:
        'La variabile è utilizzata in altri nodi. Vuoi comunque rimuoverla?',
    },
    insertVarTip: 'Premi il tasto \'/\' per inserire rapidamente',
    processData: 'Elabora Dati',
    input: 'Input',
    output: 'Output',
    jinjaEditorPlaceholder: 'Digita \'/\' o \'{\' per inserire variabile',
    viewOnly: 'Solo visualizzazione',
    showRunHistory: 'Mostra cronologia esecuzioni',
    enableJinja: 'Abilita supporto template Jinja',
    learnMore: 'Scopri di più',
    copy: 'Copia',
    duplicate: 'Duplica',
    addBlock: 'Aggiungi Blocco',
    pasteHere: 'Incolla Qui',
    pointerMode: 'Modalità Puntatore',
    handMode: 'Modalità Mano',
    model: 'Modello',
    workflowAsTool: 'Flusso di lavoro come Strumento',
    configureRequired: 'Configurazione Richiesta',
    configure: 'Configura',
    manageInTools: 'Gestisci in Strumenti',
    workflowAsToolTip:
      'È richiesta una nuova configurazione dello strumento dopo l\'aggiornamento del flusso di lavoro.',
    viewDetailInTracingPanel: 'Visualizza dettagli',
    syncingData: 'Sincronizzazione dei dati in corso, solo pochi secondi.',
    importDSL: 'Importa DSL',
    importDSLTip:
      'La bozza corrente verrà sovrascritta. Esporta il flusso di lavoro come backup prima di importare.',
    backupCurrentDraft: 'Backup Bozza Corrente',
    chooseDSL: 'Scegli file DSL(yml)',
    overwriteAndImport: 'Sovrascrivi e Importa',
    importFailure: 'Importazione fallita',
    importSuccess: 'Importazione riuscita',
  },
  env: {
    envPanelTitle: 'Variabili d\'Ambiente',
    envDescription: 'Le variabili d\'ambiente possono essere utilizzate per memorizzare informazioni private e credenziali. Sono di sola lettura e possono essere separate dal file DSL durante l\'esportazione.',
    envPanelButton: 'Aggiungi Variabile',
    modal: {
      title: 'Aggiungi Variabile d\'Ambiente',
      editTitle: 'Modifica Variabile d\'Ambiente',
      type: 'Tipo',
      name: 'Nome',
      namePlaceholder: 'nome env',
      value: 'Valore',
      valuePlaceholder: 'valore env',
      secretTip: 'Utilizzato per definire informazioni o dati sensibili, con impostazioni DSL configurate per la prevenzione delle fughe.',
    },
    export: {
      title: 'Esportare variabili d\'ambiente segrete?',
      checkbox: 'Esporta valori segreti',
      ignore: 'Esporta DSL',
      export: 'Esporta DSL con valori segreti',
    },
  },
  chatVariable: {
    panelTitle: 'Variabili di Conversazione',
    panelDescription: 'Le Variabili di Conversazione sono utilizzate per memorizzare informazioni interattive che il LLM deve ricordare, inclusi la cronologia delle conversazioni, i file caricati e le preferenze dell\'utente. Sono in lettura e scrittura.',
    docLink: 'Visita la nostra documentazione per saperne di più.',
    button: 'Aggiungi Variabile',
    modal: {
      title: 'Aggiungi Variabile di Conversazione',
      editTitle: 'Modifica Variabile di Conversazione',
      name: 'Nome',
      namePlaceholder: 'Nome della variabile',
      type: 'Tipo',
      value: 'Valore Predefinito',
      valuePlaceholder: 'Valore predefinito, lascia vuoto per non impostare',
      description: 'Descrizione',
      descriptionPlaceholder: 'Descrivi la variabile',
      editInJSON: 'Modifica in JSON',
      oneByOne: 'Aggiungi uno alla volta',
      editInForm: 'Modifica nel Modulo',
      arrayValue: 'Valore',
      addArrayValue: 'Aggiungi Valore',
      objectKey: 'Chiave',
      objectType: 'Tipo',
      objectValue: 'Valore Predefinito',
    },
    storedContent: 'Contenuto memorizzato',
    updatedAt: 'Aggiornato il ',
  },
  changeHistory: {
    title: 'Cronologia Modifiche',
    placeholder: 'Non hai ancora modificato nulla',
    clearHistory: 'Cancella Cronologia',
    hint: 'Suggerimento',
    hintText:
      'Le tue azioni di modifica vengono tracciate in una cronologia delle modifiche, che viene memorizzata sul tuo dispositivo per tutta la durata di questa sessione. Questa cronologia verrà cancellata quando lascerai l\'editor.',
    stepBackward_one: '{{count}} passo indietro',
    stepBackward_other: '{{count}} passi indietro',
    stepForward_one: '{{count}} passo avanti',
    stepForward_other: '{{count}} passi avanti',
    sessionStart: 'Inizio sessione',
    currentState: 'Stato attuale',
    nodeTitleChange: 'Titolo del blocco modificato',
    nodeDescriptionChange: 'Descrizione del blocco modificata',
    nodeDragStop: 'Blocco spostato',
    nodeChange: 'Blocco modificato',
    nodeConnect: 'Blocco collegato',
    nodePaste: 'Blocco incollato',
    nodeDelete: 'Blocco eliminato',
    nodeAdd: 'Blocco aggiunto',
    nodeResize: 'Blocco ridimensionato',
    noteAdd: 'Nota aggiunta',
    noteChange: 'Nota modificata',
    noteDelete: 'Nota eliminata',
    edgeDelete: 'Blocco scollegato',
  },
  errorMsg: {
    fieldRequired: '{{field}} è richiesto',
    authRequired: 'È richiesta l\'autorizzazione',
    invalidJson: '{{field}} è un JSON non valido',
    fields: {
      variable: 'Nome Variabile',
      variableValue: 'Valore Variabile',
      code: 'Codice',
      model: 'Modello',
      rerankModel: 'Modello Rerank',
    },
    invalidVariable: 'Variabile non valida',
  },
  singleRun: {
    testRun: 'Esecuzione Test ',
    startRun: 'Avvia Esecuzione',
    running: 'In esecuzione',
    testRunIteration: 'Iterazione Esecuzione Test',
    back: 'Indietro',
    iteration: 'Iterazione',
  },
  tabs: {
    'searchBlock': 'Cerca blocco',
    'blocks': 'Blocchi',
    'tools': 'Strumenti',
    'allTool': 'Tutti',
    'builtInTool': 'Integrato',
    'customTool': 'Personalizzato',
    'workflowTool': 'Flusso di lavoro',
    'question-understand': 'Comprensione Domanda',
    'logic': 'Logica',
    'transform': 'Trasforma',
    'utilities': 'Utility',
    'noResult': 'Nessuna corrispondenza trovata',
    'searchTool': 'Strumento di ricerca',
  },
  blocks: {
    'start': 'Inizio',
    'end': 'Fine',
    'answer': 'Risposta',
    'llm': 'LLM',
    'knowledge-retrieval': 'Recupero Conoscenza',
    'question-classifier': 'Classificatore Domande',
    'if-else': 'SE/ALTRIMENTI',
    'code': 'Codice',
    'template-transform': 'Template',
    'http-request': 'Richiesta HTTP',
    'variable-assigner': 'Assegnatore Variabili',
    'variable-aggregator': 'Aggregatore Variabili',
    'assigner': 'Assegnatore di Variabili',
    'iteration-start': 'Inizio Iterazione',
    'iteration': 'Iterazione',
    'parameter-extractor': 'Estrattore Parametri',
  },
  blocksAbout: {
    'start': 'Definisci i parametri iniziali per l\'avvio di un flusso di lavoro',
    'end': 'Definisci la fine e il tipo di risultato di un flusso di lavoro',
    'answer': 'Definisci il contenuto della risposta di una conversazione chat',
    'llm': 'Invoca modelli di linguaggio di grandi dimensioni per rispondere a domande o elaborare il linguaggio naturale',
    'knowledge-retrieval':
      'Ti consente di interrogare il contenuto del testo relativo alle domande dell\'utente dalla Conoscenza',
    'question-classifier':
      'Definisci le condizioni di classificazione delle domande dell\'utente, LLM può definire come prosegue la conversazione in base alla descrizione della classificazione',
    'if-else':
      'Ti consente di dividere il flusso di lavoro in due rami basati su condizioni se/altrimenti',
    'code': 'Esegui un pezzo di codice Python o NodeJS per implementare la logica personalizzata',
    'template-transform':
      'Converti i dati in stringa usando la sintassi del template Jinja',
    'http-request':
      'Consenti l\'invio di richieste server tramite il protocollo HTTP',
    'variable-assigner':
      'Aggrega variabili multi-ramo in una singola variabile per la configurazione unificata dei nodi a valle.',
    'assigner': 'Il nodo di assegnazione delle variabili è utilizzato per assegnare valori a variabili scrivibili (come le variabili di conversazione).',
    'variable-aggregator':
      'Aggrega variabili multi-ramo in una singola variabile per la configurazione unificata dei nodi a valle.',
    'iteration':
      'Esegui più passaggi su un oggetto lista fino a quando tutti i risultati non sono stati prodotti.',
    'parameter-extractor':
      'Usa LLM per estrarre parametri strutturati dal linguaggio naturale per invocazioni di strumenti o richieste HTTP.',
  },
  operator: {
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    zoomTo50: 'Zoom al 50%',
    zoomTo100: 'Zoom al 100%',
    zoomToFit: 'Zoom per Adattare',
  },
  panel: {
    userInputField: 'Campo di Input Utente',
    changeBlock: 'Cambia Blocco',
    helpLink: 'Link di Aiuto',
    about: 'Informazioni',
    createdBy: 'Creato da ',
    nextStep: 'Prossimo Passo',
    addNextStep: 'Aggiungi il prossimo blocco in questo flusso di lavoro',
    selectNextStep: 'Seleziona Prossimo Blocco',
    runThisStep: 'Esegui questo passo',
    checklist: 'Checklist',
    checklistTip:
      'Assicurati che tutti i problemi siano risolti prima di pubblicare',
    checklistResolved: 'Tutti i problemi sono risolti',
    organizeBlocks: 'Organizza blocchi',
    change: 'Cambia',
    optional: '(opzionale)',
  },
  nodes: {
    common: {
      outputVars: 'Variabili di Output',
      insertVarTip: 'Inserisci Variabile',
      memory: {
        memory: 'Memoria',
        memoryTip: 'Impostazioni memoria chat',
        windowSize: 'Dimensione Finestra',
        conversationRoleName: 'Nome Ruolo Conversazione',
        user: 'Prefisso Utente',
        assistant: 'Prefisso Assistente',
      },
      memories: {
        title: 'Memorie',
        tip: 'Memoria chat',
        builtIn: 'Integrato',
      },
    },
    start: {
      required: 'richiesto',
      inputField: 'Campo di Input',
      builtInVar: 'Variabili Integrate',
      outputVars: {
        query: 'Input Utente',
        memories: {
          des: 'Cronologia conversazioni',
          type: 'tipo di messaggio',
          content: 'contenuto del messaggio',
        },
        files: 'Elenco file',
      },
      noVarTip:
        'Imposta gli input che possono essere utilizzati nel Flusso di lavoro',
    },
    end: {
      outputs: 'Output',
      output: {
        type: 'tipo di output',
        variable: 'variabile di output',
      },
      type: {
        'none': 'Nessuno',
        'plain-text': 'Testo Semplice',
        'structured': 'Strutturato',
      },
    },
    answer: {
      answer: 'Risposta',
      outputVars: 'Variabili di Output',
    },
    llm: {
      model: 'modello',
      variables: 'variabili',
      context: 'contesto',
      contextTooltip: 'Puoi importare Conoscenza come contesto',
      notSetContextInPromptTip:
        'Per abilitare la funzionalità di contesto, compila la variabile del contesto nel PROMPT.',
      prompt: 'prompt',
      roleDescription: {
        system: 'Fornisci istruzioni di alto livello per la conversazione',
        user: 'Fornisci istruzioni, query o qualsiasi input basato su testo al modello',
        assistant: 'Le risposte del modello basate sui messaggi dell\'utente',
      },
      addMessage: 'Aggiungi Messaggio',
      vision: 'vision',
      files: 'File',
      resolution: {
        name: 'Risoluzione',
        high: 'Alta',
        low: 'Bassa',
      },
      outputVars: {
        output: 'Genera contenuto',
        usage: 'Informazioni sull\'utilizzo del modello',
      },
      singleRun: {
        variable: 'Variabile',
      },
      sysQueryInUser: 'sys.query nel messaggio utente è richiesto',
    },
    knowledgeRetrieval: {
      queryVariable: 'Variabile Query',
      knowledge: 'Conoscenza',
      outputVars: {
        output: 'Dati segmentati di recupero',
        content: 'Contenuto segmentato',
        title: 'Titolo segmentato',
        icon: 'Icona segmentata',
        url: 'URL segmentato',
        metadata: 'Altri metadati',
      },
    },
    http: {
      inputVars: 'Variabili di Input',
      api: 'API',
      apiPlaceholder: 'Inserisci URL, digita ‘/’ per inserire variabile',
      notStartWithHttp: 'L\'API deve iniziare con http:// o https://',
      key: 'Chiave',
      value: 'Valore',
      bulkEdit: 'Modifica di massa',
      keyValueEdit: 'Modifica Chiave-Valore',
      headers: 'Intestazioni',
      params: 'Parametri',
      body: 'Corpo',
      outputVars: {
        body: 'Contenuto Risposta',
        statusCode: 'Codice Stato Risposta',
        headers: 'Elenco Intestazioni Risposta JSON',
        files: 'Elenco File',
      },
      authorization: {
        'authorization': 'Autorizzazione',
        'authorizationType': 'Tipo di Autorizzazione',
        'no-auth': 'Nessuno',
        'api-key': 'API-Key',
        'auth-type': 'Tipo Auth',
        'basic': 'Basic',
        'bearer': 'Bearer',
        'custom': 'Custom',
        'api-key-title': 'API Key',
        'header': 'Intestazione',
      },
      insertVarPlaceholder: 'digita \'/\' per inserire variabile',
      timeout: {
        title: 'Timeout',
        connectLabel: 'Timeout Connessione',
        connectPlaceholder: 'Inserisci timeout connessione in secondi',
        readLabel: 'Timeout Lettura',
        readPlaceholder: 'Inserisci timeout lettura in secondi',
        writeLabel: 'Timeout Scrittura',
        writePlaceholder: 'Inserisci timeout scrittura in secondi',
      },
    },
    code: {
      inputVars: 'Variabili di Input',
      outputVars: 'Variabili di Output',
      advancedDependencies: 'Dipendenze Avanzate',
      advancedDependenciesTip:
        'Aggiungi alcune dipendenze precaricate che richiedono più tempo per essere consumate o che non sono predefinite qui',
      searchDependencies: 'Cerca Dipendenze',
    },
    templateTransform: {
      inputVars: 'Variabili di Input',
      code: 'Codice',
      codeSupportTip: 'Supporta solo Jinja2',
      outputVars: {
        output: 'Contenuto trasformato',
      },
    },
    ifElse: {
      if: 'Se',
      else: 'Altrimenti',
      elseDescription:
        'Utilizzato per definire la logica che dovrebbe essere eseguita quando la condizione se non è soddisfatta.',
      and: 'e',
      or: 'o',
      operator: 'Operatore',
      notSetVariable: 'Si prega di impostare prima la variabile',
      comparisonOperator: {
        'contains': 'contiene',
        'not contains': 'non contiene',
        'start with': 'inizia con',
        'end with': 'finisce con',
        'is': 'è',
        'is not': 'non è',
        'empty': 'è vuoto',
        'not empty': 'non è vuoto',
        'null': 'è nullo',
        'not null': 'non è nullo',
      },
      enterValue: 'Inserisci valore',
      addCondition: 'Aggiungi Condizione',
      conditionNotSetup: 'Condizione NON impostata',
      selectVariable: 'Seleziona variabile...',
    },
    variableAssigner: {
      title: 'Assegna variabili',
      outputType: 'Tipo di Output',
      varNotSet: 'Variabile non impostata',
      noVarTip: 'Aggiungi le variabili da assegnare',
      type: {
        string: 'Stringa',
        number: 'Numero',
        object: 'Oggetto',
        array: 'Array',
      },
      aggregationGroup: 'Gruppo di Aggregazione',
      aggregationGroupTip:
        'Abilitando questa funzione, l\'aggregatore di variabili potrà aggregare più set di variabili.',
      addGroup: 'Aggiungi Gruppo',
      outputVars: {
        varDescribe: 'Output {{groupName}}',
      },
      setAssignVariable: 'Imposta variabile assegnata',
    },
    assigner: {
      'assignedVariable': 'Variabile Assegnata',
      'writeMode': 'Modalità di Scrittura',
      'writeModeTip': 'Quando la VARIABILE ASSEGNATA è un array, la modalità di aggiunta inserisce alla fine.',
      'over-write': 'Sovrascrivere',
      'append': 'Aggiungere',
      'plus': 'Più',
      'clear': 'Cancellare',
      'setVariable': 'Imposta Variabile',
      'variable': 'Variabile',
    },
    tool: {
      toAuthorize: 'Per autorizzare',
      inputVars: 'Variabili di Input',
      outputVars: {
        text: 'contenuto generato dallo strumento',
        files: {
          title: 'file generati dallo strumento',
          type: 'Tipo supportato. Attualmente supporta solo immagini',
          transfer_method:
            'Metodo di trasferimento. Il valore è remote_url o local_file',
          url: 'URL immagine',
          upload_file_id: 'ID file caricato',
        },
        json: 'json generato dallo strumento',
      },
    },
    questionClassifiers: {
      model: 'modello',
      inputVars: 'Variabili di Input',
      outputVars: {
        className: 'Nome Classe',
      },
      class: 'Classe',
      classNamePlaceholder: 'Scrivi il nome della tua classe',
      advancedSetting: 'Impostazione Avanzata',
      topicName: 'Nome Argomento',
      topicPlaceholder: 'Scrivi il nome del tuo argomento',
      addClass: 'Aggiungi Classe',
      instruction: 'Istruzione',
      instructionTip:
        'Inserisci istruzioni aggiuntive per aiutare il classificatore di domande a capire meglio come categorizzare le domande.',
      instructionPlaceholder: 'Scrivi la tua istruzione',
    },
    parameterExtractor: {
      inputVar: 'Variabile di Input',
      extractParameters: 'Estrai Parametri',
      importFromTool: 'Importa dagli strumenti',
      addExtractParameter: 'Aggiungi Parametro Estratto',
      addExtractParameterContent: {
        name: 'Nome',
        namePlaceholder: 'Nome Parametro Estratto',
        type: 'Tipo',
        typePlaceholder: 'Tipo Parametro Estratto',
        description: 'Descrizione',
        descriptionPlaceholder: 'Descrizione Parametro Estratto',
        required: 'Richiesto',
        requiredContent:
          'Richiesto viene utilizzato solo come riferimento per l\'inferenza del modello, e non per la convalida obbligatoria dell\'output del parametro.',
      },
      extractParametersNotSet: 'Parametri Estratti non impostati',
      instruction: 'Istruzione',
      instructionTip:
        'Inserisci istruzioni aggiuntive per aiutare l\'estrattore di parametri a capire come estrarre i parametri.',
      advancedSetting: 'Impostazione Avanzata',
      reasoningMode: 'Modalità di ragionamento',
      reasoningModeTip:
        'Puoi scegliere la modalità di ragionamento appropriata in base alla capacità del modello di rispondere alle istruzioni per la chiamata delle funzioni o i prompt.',
      isSuccess:
        'È successo. In caso di successo il valore è 1, in caso di fallimento il valore è 0.',
      errorReason: 'Motivo dell\'errore',
    },
    iteration: {
      deleteTitle: 'Eliminare Nodo Iterazione?',
      deleteDesc:
        'Eliminando il nodo iterazione verranno eliminati tutti i nodi figlio',
      input: 'Input',
      output: 'Variabili di Output',
      iteration_one: '{{count}} Iterazione',
      iteration_other: '{{count}} Iterazioni',
      currentIteration: 'Iterazione Corrente',
    },
    note: {
      addNote: 'Aggiungi Nota',
      editor: {
        placeholder: 'Scrivi la tua nota...',
        small: 'Piccolo',
        medium: 'Medio',
        large: 'Grande',
        bold: 'Grassetto',
        italic: 'Corsivo',
        strikethrough: 'Barrato',
        link: 'Link',
        openLink: 'Apri',
        unlink: 'Rimuovi link',
        enterUrl: 'Inserisci URL...',
        invalidUrl: 'URL non valido',
        bulletList: 'Elenco puntato',
        showAuthor: 'Mostra Autore',
      },
    },
  },
  tracing: {
    stopBy: 'Interrotto da {{user}}',
  },
}

export default translation
