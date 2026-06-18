/**
 * Contenido de las páginas legales (Aviso Legal, Privacidad, Cookies).
 *
 * Redactado conforme a LSSI-CE (Ley 34/2002), RGPD (UE 2016/679),
 * LOPDGDD (3/2018) y la Guía de cookies de la AEPD, y revisado por un
 * pase de cumplimiento. Los datos registrales quedan como placeholder
 * hasta que se aporten.
 */

export type LegalSection = { heading: string; body: string };
export type LegalDocContent = {
  slug: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

const UPDATED = "17 de junio de 2026";

export const avisoLegal: LegalDocContent = {
  slug: "aviso-legal",
  title: "Aviso legal",
  updated: UPDATED,
  intro:
    "El presente Aviso Legal regula el acceso, la navegación y el uso del sitio web https://www.serviplusultrasolutionssl.com, titularidad de ServiPlusUltra Solutions S.L. Le rogamos que lo lea con atención, ya que el acceso al sitio y su utilización implican la aceptación de las condiciones aquí recogidas.",
  sections: [
    {
      heading: "1. Datos identificativos del titular",
      body: `En cumplimiento del deber de información previsto en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se ponen a su disposición los siguientes datos del titular del sitio web:

- Razón social: ServiPlusUltra Solutions S.L.
- Nombre comercial: ServiPlusUltra
- CIF: B-26892760
- Domicilio social: Carrer d'Aribau 168, 1º 1ª, 08036 Barcelona (España)
- Correo electrónico de contacto: info@serviplusultrasolutionssl.com
- Teléfono: +34 641 482 762
- Sitio web: https://www.serviplusultrasolutionssl.com
- Datos registrales: inscrita en el Registro Mercantil de Barcelona [Tomo ___, Folio ___, Hoja ___, Inscripción ___]`,
    },
    {
      heading: "2. Objeto y ámbito de aplicación",
      body: `ServiPlusUltra Solutions S.L. es una empresa dedicada a la prestación de multiservicios técnicos a domicilio, que comprenden, entre otros, trabajos de electricidad, climatización, fontanería, carpintería, reparaciones y reformas, dirigidos tanto a particulares como a empresas, en las áreas de Madrid y Barcelona y sus zonas metropolitanas.

El presente Aviso Legal regula el acceso, la navegación y la utilización del sitio web, sin perjuicio de que el titular se reserve el derecho a modificar la presentación, configuración y contenidos del mismo, así como las condiciones requeridas para su acceso y uso. El acceso y uso de los contenidos del sitio tras la entrada en vigor de sus modificaciones suponen la aceptación de las mismas.

No obstante, el acceso a determinados contenidos y la utilización de determinados servicios podrá encontrarse sometido a condiciones particulares que, en su caso, sustituirán, completarán o modificarán el presente Aviso Legal y que deberán ser aceptadas con carácter previo a la utilización de dichos contenidos o servicios.`,
    },
    {
      heading: "3. Condiciones de uso del sitio web",
      body: `La condición de usuario se adquiere por el mero acceso y navegación por el sitio web. El usuario se compromete a hacer un uso adecuado y lícito del sitio y de sus contenidos, de conformidad con la legislación aplicable, el presente Aviso Legal, la moral y las buenas costumbres generalmente aceptadas y el orden público.

En particular, el usuario se obliga a abstenerse de:

- Utilizar el sitio web con fines o efectos ilícitos, lesivos de los derechos e intereses de terceros, o que de cualquier forma puedan dañar, inutilizar, sobrecargar, deteriorar o impedir la normal utilización del sitio.
- Introducir o difundir programas informáticos maliciosos (virus, código dañino, etc.) susceptibles de provocar alteraciones o daños en los sistemas del titular o de terceros.
- Intentar acceder, utilizar o manipular los datos del titular, de terceros proveedores o de otros usuarios.
- Reproducir, copiar, distribuir, transformar o modificar los contenidos del sitio, salvo autorización del titular o cuando ello esté legalmente permitido.

Facilitar datos de carácter personal a través de los formularios del sitio implica que el usuario garantiza la veracidad y exactitud de los mismos, comprometiéndose a mantenerlos actualizados y respondiendo de los daños y perjuicios que pudieran derivarse de su inexactitud.`,
    },
    {
      heading: "4. Propiedad intelectual e industrial",
      body: `Todos los contenidos del sitio web, entendiendo por estos, a título enunciativo y no limitativo, los textos, fotografías, gráficos, imágenes, iconos, tecnología, software, diseño gráfico, código fuente, así como su estructura, selección y orden, son titularidad de ServiPlusUltra Solutions S.L. o, en su caso, de terceros que han autorizado su uso, y se encuentran protegidos por la normativa nacional e internacional sobre propiedad intelectual e industrial.

La marca, el nombre comercial "ServiPlusUltra", el logotipo y demás signos distintivos que aparecen en el sitio son titularidad del titular o cuentan con la correspondiente licencia de uso, y quedan igualmente protegidos por la legislación vigente en materia de propiedad industrial.

Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación, total o parcial, de los contenidos, marcas y signos distintivos del sitio sin la autorización previa, expresa y por escrito del titular. El acceso al sitio web no otorga al usuario derecho ni titularidad alguna sobre los derechos de propiedad intelectual o industrial de los contenidos que alberga.

El usuario podrá visualizar e imprimir los contenidos del sitio exclusivamente para su uso personal y privado, quedando prohibida su utilización con fines comerciales o su incorporación a otros entornos sin autorización.`,
    },
    {
      heading: "5. Exclusión de responsabilidad",
      body: `El titular procura que la información publicada en el sitio web sea veraz, completa y actualizada, si bien no garantiza la ausencia total de errores u omisiones en los contenidos, ni que estos se encuentren permanentemente actualizados. La información de carácter orientativo sobre servicios, precios o plazos no constituye oferta vinculante; cualquier presupuesto en firme se formalizará de manera específica con el usuario.

El titular no garantiza la disponibilidad y continuidad ininterrumpida del funcionamiento del sitio web. En consecuencia, no será responsable de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de la falta de disponibilidad o de continuidad del sitio, de la defraudación de la utilidad que el usuario hubiera atribuido a sus contenidos, o de la presencia de virus u otros elementos lesivos en los contenidos que puedan producir alteraciones en los sistemas informáticos, documentos o ficheros del usuario, sin perjuicio de que el titular adopte las medidas técnicas razonables para evitarlo.

El titular no asume responsabilidad alguna por los daños y perjuicios derivados del uso indebido del sitio por parte de los usuarios o de terceros, ni por los contenidos, productos o servicios accesibles a través de enlaces a sitios de terceros.`,
    },
    {
      heading: "6. Enlaces e hipervínculos",
      body: `El sitio web puede contener enlaces o hipervínculos a otros sitios de internet gestionados por terceros, con la finalidad de facilitar al usuario el acceso a información complementaria. El titular no asume responsabilidad alguna sobre dichos enlaces ni sobre los contenidos, servicios o información a los que se acceda a través de ellos, ni garantiza su disponibilidad, calidad, fiabilidad, exactitud o licitud.

La existencia de estos enlaces no implica relación alguna, recomendación, patrocinio ni asociación entre el titular y las personas o entidades titulares de los sitios enlazados. Si el usuario detectara que algún enlace dirige a contenidos ilícitos o inapropiados, podrá comunicarlo al titular a través del correo electrónico info@serviplusultrasolutionssl.com, sin que ello suponga la obligación de retirar el enlace.

El establecimiento de hiperenlaces dirigidos al sitio web del titular desde páginas de terceros no autoriza a presentar el sitio como propio, ni a realizar manifestaciones falsas o inexactas sobre el titular, ni a incluirlo en sitios cuyos contenidos resulten ilícitos o contrarios a la moral y al orden público.`,
    },
    {
      heading: "7. Protección de datos personales",
      body: `ServiPlusUltra Solutions S.L. trata los datos personales de los usuarios conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).

El único punto de recogida de datos personales del sitio es el formulario de contacto disponible en /contacto, en el que se solicitan los siguientes campos: nombre, teléfono, correo electrónico (opcional), ciudad, servicio, urgencia, mensaje y una casilla de aceptación de la política de privacidad. La finalidad del tratamiento es atender y gestionar la solicitud de presupuesto o contacto del usuario, y la base jurídica es el consentimiento del interesado prestado al enviar el formulario (artículo 6.1.a del RGPD). Los datos se conservarán durante el tiempo necesario para gestionar la solicitud y, posteriormente, durante los plazos legales aplicables, tras los cuales serán suprimidos.

La información detallada sobre el tratamiento de datos personales se recoge en la Política de Privacidad del sitio, a la que se remite expresamente este Aviso Legal.`,
    },
    {
      heading: "8. Política de cookies",
      body: `Las cookies son pequeños archivos de texto que los sitios web almacenan en el dispositivo del usuario cuando navega por ellos, y que permiten, entre otras funciones, recordar información sobre su visita, garantizar el correcto funcionamiento del sitio o, en su caso, obtener información estadística o mostrar publicidad.

Este sitio utiliza actualmente solo cookies técnicas o estrictamente necesarias. Están previstas cookies analíticas y publicitarias que únicamente se activarán previo consentimiento del usuario mediante el banner de cookies. La información completa sobre tipos de cookies, finalidades, plazos, terceros y cómo aceptarlas, rechazarlas o revocarlas se detalla en nuestra Política de cookies, a la que se remite expresamente este Aviso Legal.`,
    },
    {
      heading: "9. Legislación aplicable y jurisdicción",
      body: `El presente Aviso Legal, así como las relaciones entre el titular y los usuarios derivadas del acceso y uso del sitio web, se rigen e interpretan de conformidad con la legislación española.

Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso del sitio web, las partes se someten a los Juzgados y Tribunales que resulten competentes conforme a la legislación aplicable. Cuando el usuario tenga la condición de consumidor, será de aplicación el fuero que legalmente le corresponda, sin que las presentes condiciones puedan limitar los derechos que le reconozca la normativa de protección de los consumidores y usuarios.`,
    },
  ],
};

export const privacidad: LegalDocContent = {
  slug: "privacidad",
  title: "Política de privacidad",
  updated: UPDATED,
  intro:
    "En ServiPlusUltra Solutions S.L. nos tomamos en serio la protección de sus datos personales. Esta Política de privacidad explica, de forma clara y conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), quién trata sus datos, con qué finalidad, sobre qué base jurídica, con quién los compartimos y qué derechos le asisten. Le rogamos que la lea con atención antes de facilitarnos cualquier dato a través de este sitio web.",
  sections: [
    {
      heading: "1. Responsable del tratamiento",
      body: `El responsable del tratamiento de los datos personales recogidos a través de este sitio web es:

- Razón social: ServiPlusUltra Solutions S.L.
- Nombre comercial: ServiPlusUltra
- CIF: B-26892760
- Domicilio social: Carrer d'Aribau 168, 1º 1ª, 08036 Barcelona (España)
- Correo electrónico de contacto: info@serviplusultrasolutionssl.com
- Teléfono: +34 641 482 762
- Sitio web: https://www.serviplusultrasolutionssl.com
- Datos registrales: Inscrita en el Registro Mercantil de Barcelona, [Tomo ___, Folio ___, Hoja ___, Inscripción ___].

ServiPlusUltra Solutions S.L. desarrolla su actividad en la prestación de multiservicios técnicos a domicilio (electricidad, climatización, fontanería, carpintería, reparaciones y reformas) en Madrid y Barcelona, dirigidos tanto a particulares como a empresas.

ServiPlusUltra Solutions S.L. no está obligada a designar un Delegado de Protección de Datos (DPO). Para cualquier cuestión relativa al tratamiento de sus datos personales, puede dirigirse al responsable a través del correo info@serviplusultrasolutionssl.com.`,
    },
    {
      heading: "2. Qué datos recogemos y a través de qué medio",
      body: `El principal punto de recogida de datos personales de este sitio web es el formulario de contacto disponible en la página /contacto. A través de dicho formulario podemos recoger los siguientes datos que usted nos facilita voluntariamente:

- Nombre.
- Teléfono.
- Correo electrónico (campo opcional).
- Ciudad.
- Servicio que solicita.
- Urgencia o plazo en que necesita el servicio.
- Mensaje con la descripción de su solicitud.
- Aceptación de la casilla de consentimiento de esta Política de privacidad.

No recogemos datos especialmente protegidos (categorías especiales del artículo 9 del RGPD). Le pedimos que no incluya en el campo de mensaje información de este tipo, ya que no es necesaria para atender su solicitud. Salvo el correo electrónico, que es opcional, el resto de campos indicados son necesarios para poder gestionar su petición; si no los facilita, es posible que no podamos atenderla correctamente.

Si usted contacta con nosotros por otros medios facilitados en el sitio (teléfono, WhatsApp o correo electrónico), trataremos igualmente los datos que nos proporcione con la misma finalidad de atender su solicitud y sobre la base de su consentimiento.

Además de los datos del formulario, por el mero acceso al sitio web nuestro proveedor de alojamiento web puede tratar de forma automática datos técnicos de conexión, como la dirección IP, el tipo de navegador o la fecha y hora de acceso, con la finalidad de prestar el servicio de alojamiento, garantizar la seguridad de la red y prevenir usos fraudulentos. La base jurídica de este tratamiento es el interés legítimo del responsable (artículo 6.1.f del RGPD) en mantener la seguridad y el correcto funcionamiento del sitio. Estos datos no se utilizan para identificarle personalmente.`,
    },
    {
      heading: "3. Finalidad del tratamiento",
      body: `Tratamos los datos que usted nos facilita a través del formulario de contacto con la única finalidad de atender, gestionar y responder a su solicitud de presupuesto o de contacto, ponernos en comunicación con usted por los medios facilitados y proporcionarle la información o la orientación de precio y plazo que nos haya solicitado.

No utilizamos sus datos para elaborar perfiles ni para tomar decisiones automatizadas que produzcan efectos jurídicos sobre usted. No le enviaremos comunicaciones comerciales no solicitadas a partir de los datos de este formulario.`,
    },
    {
      heading: "4. Base jurídica del tratamiento",
      body: `La base jurídica que legitima el tratamiento de sus datos es su consentimiento, prestado de forma libre, específica, informada e inequívoca al marcar la casilla de aceptación de esta Política de privacidad y enviar el formulario de contacto, conforme al artículo 6.1.a) del RGPD.

Puede retirar dicho consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento realizado con anterioridad a su retirada, dirigiéndose a la dirección indicada en esta política.`,
    },
    {
      heading: "5. Plazo de conservación",
      body: `Conservaremos sus datos personales durante el tiempo necesario para gestionar y atender su solicitud y dar respuesta a la misma.

Una vez atendida, conservaremos los datos debidamente bloqueados durante los plazos legales que resulten aplicables para atender eventuales responsabilidades derivadas del tratamiento y de nuestra relación con usted. Transcurridos dichos plazos, sus datos serán suprimidos de forma segura.`,
    },
    {
      heading: "6. Destinatarios y encargados del tratamiento",
      body: `Sus datos no se cederán a terceros, salvo obligación legal. No obstante, para poder prestar el servicio del sitio web y gestionar su solicitud, intervienen los siguientes proveedores que actúan como encargados del tratamiento por cuenta de ServiPlusUltra Solutions S.L., con los que se suscriben los correspondientes contratos de encargo del tratamiento conforme al artículo 28 del RGPD:

- Un proveedor de servicios de envío de correo electrónico (ubicado en Estados Unidos, con garantías adecuadas): gestiona el envío de los mensajes generados por el formulario de contacto.
- Un proveedor de alojamiento web e infraestructura (ubicado en Estados Unidos, con garantías adecuadas): en cuyos servidores se aloja este sitio.

Adicionalmente, están previstos servicios de analítica y de publicidad de terceros, que actualmente no están activos y que solo se activarán previo consentimiento explícito del usuario a través del banner de cookies:

- Un servicio de analítica web, para medir de forma agregada el uso del sitio.
- Un servicio de publicidad online, para la gestión y medición de campañas.

Mientras usted no preste su consentimiento a las cookies analíticas y publicitarias, estos servicios no tratarán sus datos a través de este sitio web. Encontrará el detalle en nuestra Política de cookies.`,
    },
    {
      heading: "7. Transferencias internacionales de datos",
      body: `Algunos de nuestros proveedores (de alojamiento web, de envío de correo electrónico y, en su caso, de analítica y publicidad) están ubicados o tratan datos en Estados Unidos, por lo que el tratamiento puede implicar una transferencia internacional de datos fuera del Espacio Económico Europeo.

Dichas transferencias se realizan al amparo de garantías adecuadas conforme al Capítulo V del RGPD, en particular mediante las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea y/o la adhesión del importador al EU-US Data Privacy Framework (marco de adecuación reconocido por la Comisión Europea). Estas garantías tienen por objeto asegurar que sus datos disfruten de un nivel de protección equivalente al exigido por la normativa europea.

Puede solicitarnos información adicional sobre estas garantías y obtener una copia de las mismas dirigiéndose a info@serviplusultrasolutionssl.com.`,
    },
    {
      heading: "8. Cookies",
      body: `Una cookie es un pequeño archivo de texto que un sitio web almacena en su dispositivo (ordenador, móvil o tableta) cuando usted lo visita, y que permite reconocer su navegador y recordar determinada información.

Actualmente este sitio web solo utiliza cookies técnicas o estrictamente necesarias, que por su naturaleza no requieren su consentimiento. Están previstas cookies analíticas y publicitarias de terceros, que solo se instalarán y activarán cuando usted preste su consentimiento explícito a través del banner de cookies.

Encontrará información detallada sobre las cookies utilizadas y previstas, así como sobre cómo gestionarlas, en nuestra Política de cookies, a la que se remite expresamente esta Política de privacidad.`,
    },
    {
      heading: "9. Derechos del interesado",
      body: `La normativa de protección de datos le reconoce los siguientes derechos en relación con sus datos personales:

- Derecho de acceso: conocer si tratamos sus datos y obtener información sobre dicho tratamiento.
- Derecho de rectificación: solicitar la corrección de los datos inexactos o incompletos.
- Derecho de supresión: solicitar la eliminación de sus datos cuando, entre otros motivos, ya no sean necesarios para los fines para los que se recogieron.
- Derecho de oposición: oponerse al tratamiento de sus datos por motivos relacionados con su situación particular.
- Derecho a la limitación del tratamiento: solicitar que se limite el tratamiento de sus datos en los supuestos previstos por la norma.
- Derecho a la portabilidad: recibir sus datos en un formato estructurado, de uso común y lectura mecánica, o solicitar su transmisión a otro responsable.
- Derecho a retirar el consentimiento en cualquier momento, sin que ello afecte a la licitud del tratamiento previo a su retirada.

Puede ejercer estos derechos de forma gratuita dirigiéndose por escrito a info@serviplusultrasolutionssl.com, o por correo postal al domicilio social indicado en el apartado 1, identificándose debidamente e indicando el derecho que desea ejercer. Podremos solicitarle que acredite su identidad para garantizar que solo el titular de los datos accede a ellos.

Asimismo, si considera que el tratamiento de sus datos no se ajusta a la normativa vigente, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), con domicilio en C/ Jorge Juan, 6, 28001 Madrid, y a través de su sede electrónica en www.aepd.es.`,
    },
    {
      heading: "10. Medidas de seguridad",
      body: `ServiPlusUltra Solutions S.L. ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad, integridad y confidencialidad de sus datos personales, así como para evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la técnica, los costes de aplicación y la naturaleza, el alcance, el contexto y los fines del tratamiento, conforme al artículo 32 del RGPD.

Entre otras medidas, la información transmitida a través del sitio web se realiza mediante conexiones cifradas, y exigimos a nuestros proveedores y encargados del tratamiento que apliquen garantías de seguridad equivalentes.`,
    },
    {
      heading: "11. Consentimiento y veracidad de los datos",
      body: `Al marcar la casilla de aceptación y enviar el formulario de contacto, usted declara haber leído y comprendido esta Política de privacidad y consiente expresamente el tratamiento de sus datos personales en los términos aquí descritos.

Usted garantiza que los datos facilitados son veraces, exactos y actuales, y se compromete a comunicarnos cualquier modificación de los mismos. Será el único responsable de las manifestaciones falsas o inexactas que realice y de los perjuicios que pudieran causar. En caso de facilitar datos de terceros, declara contar con su consentimiento previo para comunicárnoslos y se compromete a informarles del contenido de esta política.`,
    },
    {
      heading: "12. Cambios en la Política de privacidad",
      body: `ServiPlusUltra Solutions S.L. se reserva el derecho a modificar esta Política de privacidad para adaptarla a novedades legislativas, jurisprudenciales o a cambios en los tratamientos realizados. En caso de modificaciones sustanciales, se lo comunicaremos a través del propio sitio web. Le recomendamos revisar esta página periódicamente para estar informado sobre cómo tratamos sus datos.`,
    },
  ],
};

export const cookies: LegalDocContent = {
  slug: "cookies",
  title: "Política de cookies",
  updated: UPDATED,
  intro:
    "Esta Política de cookies explica qué son las cookies, qué tipos utiliza o prevé utilizar el sitio web https://www.serviplusultrasolutionssl.com, con qué finalidad, en qué base jurídica nos apoyamos y cómo puede usted aceptarlas, rechazarlas o revocar su consentimiento en cualquier momento. Esta política se ofrece en cumplimiento del artículo 22.2 de la LSSI-CE, del Reglamento (UE) 2016/679 (RGPD), de la Ley Orgánica 3/2018 (LOPDGDD) y de las directrices de la Agencia Española de Protección de Datos (AEPD).",
  sections: [
    {
      heading: "Responsable del sitio web",
      body: `El responsable de este sitio web y del tratamiento de los datos derivados del uso de cookies es:

- Razón social: ServiPlusUltra Solutions S.L. (en adelante, "ServiPlusUltra").
- CIF: B-26892760.
- Domicilio social: Carrer d'Aribau 168, 1º 1ª, 08036 Barcelona (España).
- Correo electrónico: info@serviplusultrasolutionssl.com.
- Teléfono: +34 641 482 762.
- Sitio web: https://www.serviplusultrasolutionssl.com.
- Datos registrales: Registro Mercantil de Barcelona — [Tomo ___, Folio ___, Hoja ___, Inscripción ___].`,
    },
    {
      heading: "Qué son las cookies",
      body: `Una cookie es un pequeño fichero de texto que los sitios web almacenan en el navegador o en el dispositivo (ordenador, teléfono móvil o tableta) del usuario cuando los visita. Las cookies permiten que el sitio web recuerde información sobre la visita, como por ejemplo las preferencias del usuario o determinados datos técnicos, con el fin de facilitar la navegación, hacerla más útil o, en algunos casos, analizar el uso del sitio o mostrar publicidad.

Junto a las cookies, existen otras tecnologías de finalidad similar (por ejemplo, el almacenamiento local del navegador o los píxeles de seguimiento). A los efectos de esta política, las referencias a las "cookies" deben entenderse extensivas a esas tecnologías equivalentes.

Las cookies no dañan el dispositivo del usuario y, salvo las estrictamente necesarias para el funcionamiento del sitio, solo se instalan con su consentimiento previo.`,
    },
    {
      heading: "Tipos de cookies",
      body: `Las cookies pueden clasificarse según distintos criterios. A continuación se explican las categorías relevantes para este sitio web.

Según quién las gestiona:

- Cookies propias: las gestiona el propio responsable del sitio (ServiPlusUltra) desde sus equipos o dominios.
- Cookies de terceros: las gestiona un tercero distinto del responsable (por ejemplo, un proveedor de analítica o de publicidad) que trata la información recogida a través de ellas.

Según su finalidad:

- Cookies técnicas o estrictamente necesarias: permiten la navegación y el uso de las funcionalidades básicas del sitio (por ejemplo, garantizar la seguridad, equilibrar la carga del servidor, recordar el estado de la sesión o conservar la decisión del usuario sobre las cookies). Son imprescindibles para el correcto funcionamiento del sitio web.
- Cookies analíticas o de medición: permiten conocer y analizar de forma agregada el comportamiento de los usuarios (páginas visitadas, tiempo de permanencia, origen del tráfico, etc.) con el fin de mejorar el sitio y los servicios.
- Cookies de publicidad o publicitarias: permiten gestionar los espacios publicitarios y mostrar anuncios, en su caso personalizados en función de la navegación del usuario, así como medir el rendimiento de las campañas.

Según su duración:

- Cookies de sesión: recogen y almacenan datos únicamente mientras el usuario navega por el sitio y se eliminan al cerrar el navegador.
- Cookies persistentes: permanecen almacenadas en el dispositivo durante un periodo determinado, que puede ir de unos minutos a varios años, según la cookie.`,
    },
    {
      heading: "Cookies que utiliza o prevé utilizar este sitio web",
      body: `En la actualidad, este sitio web únicamente utiliza cookies técnicas o estrictamente necesarias para su funcionamiento. No se utilizan, por el momento, cookies analíticas ni publicitarias activas.

No obstante, ServiPlusUltra tiene previsto incorporar en el futuro las siguientes cookies de terceros:

- Cookies analíticas de un proveedor externo de analítica web, para analizar de forma agregada el uso del sitio.
- Cookies publicitarias de un proveedor externo de publicidad online, para la gestión y medición de campañas publicitarias.

Estas cookies analíticas y publicitarias todavía no están activas. Cuando lo estén, solo se instalarán previo consentimiento explícito del usuario a través del banner de cookies, y esta política se actualizará para detallarlas en la tabla siguiente (nombre, titular, finalidad y plazo de conservación).`,
    },
    {
      heading: "Finalidad de cada tipo de cookie",
      body: `- Cookies técnicas o estrictamente necesarias (activas): permitir la navegación, mantener la seguridad del sitio, asegurar su funcionamiento correcto y recordar las preferencias del usuario en materia de cookies. Sin ellas, el sitio no podría funcionar adecuadamente.
- Cookies analíticas (previstas, no activas): conocer de forma estadística y agregada cómo se utiliza el sitio para mejorar su contenido y su rendimiento.
- Cookies publicitarias (previstas, no activas): mostrar y gestionar publicidad, en su caso adaptada a los intereses del usuario, y medir la eficacia de las campañas.

Le informamos de que el único punto en el que este sitio recoge datos personales facilitados directamente por el usuario es el formulario de contacto disponible en /contacto, cuya finalidad es atender la solicitud de presupuesto o contacto. Dicho tratamiento es independiente del uso de cookies y se rige por la Política de Privacidad del sitio.`,
    },
    {
      heading: "Base jurídica",
      body: `Las cookies técnicas o estrictamente necesarias están exceptuadas del deber de obtener el consentimiento del usuario en virtud del artículo 22.2 de la LSSI-CE, por tratarse de cookies imprescindibles para la prestación del servicio expresamente solicitado por el usuario y para el funcionamiento del sitio web. Por ello, se instalan sin necesidad de su autorización previa, sin que resulte de aplicación la categoría de interés legítimo.

La base jurídica para el uso de las cookies analíticas y publicitarias (cuando se activen) es el consentimiento del usuario (artículo 6.1.a del RGPD y artículo 22.2 de la LSSI-CE). Estas cookies no se instalarán mientras usted no preste su consentimiento de forma libre, específica, informada e inequívoca a través del banner de cookies. Usted podrá retirar dicho consentimiento en cualquier momento, con la misma facilidad con la que lo otorgó, sin que ello afecte a la licitud del tratamiento realizado con anterioridad a su retirada.`,
    },
    {
      heading: "Tabla de cookies",
      body: `A continuación se detallan las cookies actualmente utilizadas por el sitio web.

Cookies técnicas / estrictamente necesarias (propias):

- Nombre: cookie de consentimiento de cookies | Titular: ServiPlusUltra (propia) | Tipo: técnica | Finalidad: recordar la decisión del usuario sobre la aceptación o el rechazo de cookies y evitar volver a mostrar el banner en cada visita | Duración: persistente (hasta 12 meses).
- Nombre: cookies de sesión y seguridad del sitio | Titular: ServiPlusUltra (propia) | Tipo: técnica | Finalidad: mantener la sesión de navegación, garantizar la seguridad y el correcto funcionamiento del sitio | Duración: de sesión.

Cookies analíticas y publicitarias (de terceros):

- Actualmente NO se utilizan. Las cookies analíticas y publicitarias de terceros están previstas y se incorporarán a esta tabla, con el detalle de su nombre, titular, finalidad y plazo de conservación, en el momento en que se activen y siempre previo consentimiento del usuario.

Nota: la denominación exacta y el número de cookies técnicas pueden variar por motivos operativos o de seguridad. En cualquier caso, todas ellas responden a las finalidades técnicas descritas en esta política.`,
    },
    {
      heading: "Cómo aceptar, rechazar y revocar el consentimiento",
      body: `Cuando este sitio incorpore cookies que requieran consentimiento (analíticas y publicitarias), al acceder al sitio se le mostrará un banner de cookies desde el que podrá:

- Aceptar todas las cookies.
- Rechazar todas las cookies no necesarias.
- Configurar de forma granular qué categorías de cookies desea permitir.

Mientras no acepte las cookies no esenciales, únicamente se instalarán las cookies técnicas o estrictamente necesarias. Podrá modificar o revocar su decisión en cualquier momento, con la misma facilidad con la que la otorgó, accediendo de nuevo al panel de configuración de cookies a través del enlace "Preferencias de cookies" disponible en el pie de página del sitio.

Además, usted puede gestionar, bloquear o eliminar las cookies directamente desde la configuración de su navegador. Le recordamos que, si bloquea o elimina las cookies técnicas, es posible que algunas funcionalidades del sitio no funcionen correctamente. A continuación se facilitan los enlaces de ayuda de los principales navegadores:

- Google Chrome: https://support.google.com/chrome/answer/95647
- Mozilla Firefox: https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias
- Microsoft Edge: https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09
- Apple Safari: https://support.apple.com/es-es/guide/safari/sfri11471/mac
- Opera: https://help.opera.com/es/latest/web-preferences/

También puede utilizar el modo de navegación privada o de incógnito de su navegador, que limita el almacenamiento de cookies tras finalizar la sesión.`,
    },
    {
      heading: "Transferencias internacionales de datos",
      body: `Las cookies analíticas y publicitarias previstas son gestionadas por proveedores externos que pueden tratar datos en los Estados Unidos, por lo que su uso puede implicar una transferencia internacional de datos fuera del Espacio Económico Europeo.

Dichas transferencias se realizan con las garantías adecuadas exigidas por el RGPD, en concreto mediante la adhesión del importador al EU-US Data Privacy Framework (Marco de Privacidad de Datos UE-EE. UU.) y/o mediante la suscripción de Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.

Asimismo, nuestros proveedores de servicios técnicos (alojamiento web y envío de correo electrónico), con sede en los Estados Unidos, actúan como encargados del tratamiento y aplican igualmente garantías adecuadas para las transferencias internacionales (Cláusulas Contractuales Tipo y/o EU-US Data Privacy Framework).`,
    },
    {
      heading: "Sus derechos en materia de protección de datos",
      body: `En relación con los datos personales que puedan tratarse a través de cookies o del formulario de contacto, usted puede ejercer los siguientes derechos:

- Acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de sus datos.
- Retirar el consentimiento prestado en cualquier momento, sin que ello afecte a la licitud del tratamiento previo a su retirada.
- Presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), con domicilio en C/ Jorge Juan, 6, 28001 Madrid, y sede electrónica en www.aepd.es, si considera que sus derechos no han sido debidamente atendidos.

Puede ejercer estos derechos escribiendo a info@serviplusultrasolutionssl.com, indicando el derecho que desea ejercer y acompañando, en su caso, la documentación que acredite su identidad.`,
    },
    {
      heading: "Actualización de esta política",
      body: `ServiPlusUltra podrá modificar esta Política de cookies para adaptarla a novedades legislativas, a las directrices de la AEPD o a cambios en las cookies utilizadas por el sitio (por ejemplo, cuando se activen las cookies analíticas o publicitarias previstas). Le recomendamos revisar esta política periódicamente cada vez que acceda al sitio web.

Para cualquier duda sobre el uso de cookies en este sitio, puede dirigirse a info@serviplusultrasolutionssl.com.`,
    },
  ],
};

export const legalDocs = { avisoLegal, privacidad, cookies };
