-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-03-2023 a las 08:55:17
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `eshop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `boleto`
--

CREATE TABLE `boleto` (
  `id` int(11) NOT NULL,
  `evento_id` int(11) NOT NULL,
  `fecha` int(11) NOT NULL,
  `valor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comunas`
--

CREATE TABLE `comunas` (
  `id` int(11) NOT NULL,
  `comuna` varchar(64) NOT NULL,
  `provincia_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comunas`
--

INSERT INTO `comunas` (`id`, `comuna`, `provincia_id`) VALUES
(1, 'Arica', 1),
(2, 'Camarones', 1),
(3, 'General Lagos', 2),
(4, 'Putre', 2),
(5, 'Alto Hospicio', 3),
(6, 'Iquique', 3),
(7, 'Camiña', 4),
(8, 'Colchane', 4),
(9, 'Huara', 4),
(10, 'Pica', 4),
(11, 'Pozo Almonte', 4),
(12, 'Tocopilla', 5),
(13, 'María Elena', 5),
(14, 'Calama', 6),
(15, 'Ollague', 6),
(16, 'San Pedro de Atacama', 6),
(17, 'Antofagasta', 7),
(18, 'Mejillones', 7),
(19, 'Sierra Gorda', 7),
(20, 'Taltal', 7),
(21, 'Chañaral', 8),
(22, 'Diego de Almagro', 8),
(23, 'Copiapó', 9),
(24, 'Caldera', 9),
(25, 'Tierra Amarilla', 9),
(26, 'Vallenar', 10),
(27, 'Alto del Carmen', 10),
(28, 'Freirina', 10),
(29, 'Huasco', 10),
(30, 'La Serena', 11),
(31, 'Coquimbo', 11),
(32, 'Andacollo', 11),
(33, 'La Higuera', 11),
(34, 'Paihuano', 11),
(35, 'Vicuña', 11),
(36, 'Ovalle', 12),
(37, 'Combarbalá', 12),
(38, 'Monte Patria', 12),
(39, 'Punitaqui', 12),
(40, 'Río Hurtado', 12),
(41, 'Illapel', 13),
(42, 'Canela', 13),
(43, 'Los Vilos', 13),
(44, 'Salamanca', 13),
(45, 'La Ligua', 14),
(46, 'Cabildo', 14),
(47, 'Zapallar', 14),
(48, 'Papudo', 14),
(49, 'Petorca', 14),
(50, 'Los Andes', 15),
(51, 'San Esteban', 15),
(52, 'Calle Larga', 15),
(53, 'Rinconada', 15),
(54, 'San Felipe', 16),
(55, 'Llaillay', 16),
(56, 'Putaendo', 16),
(57, 'Santa María', 16),
(58, 'Catemu', 16),
(59, 'Panquehue', 16),
(60, 'Quillota', 17),
(61, 'La Cruz', 17),
(62, 'La Calera', 17),
(63, 'Nogales', 17),
(64, 'Hijuelas', 17),
(65, 'Valparaíso', 18),
(66, 'Viña del Mar', 18),
(67, 'Concón', 18),
(68, 'Quintero', 18),
(69, 'Puchuncaví', 18),
(70, 'Casablanca', 18),
(71, 'Juan Fernández', 18),
(72, 'San Antonio', 19),
(73, 'Cartagena', 19),
(74, 'El Tabo', 19),
(75, 'El Quisco', 19),
(76, 'Algarrobo', 19),
(77, 'Santo Domingo', 19),
(78, 'Isla de Pascua', 20),
(79, 'Quilpué', 21),
(80, 'Limache', 21),
(81, 'Olmué', 21),
(82, 'Villa Alemana', 21),
(83, 'Colina', 22),
(84, 'Lampa', 22),
(85, 'Tiltil', 22),
(86, 'Santiago', 23),
(87, 'Vitacura', 23),
(88, 'San Ramón', 23),
(89, 'San Miguel', 23),
(90, 'San Joaquín', 23),
(91, 'Renca', 23),
(92, 'Recoleta', 23),
(93, 'Quinta Normal', 23),
(94, 'Quilicura', 23),
(95, 'Pudahuel', 23),
(96, 'Providencia', 23),
(97, 'Peñalolén', 23),
(98, 'Pedro Aguirre Cerda', 23),
(99, 'Ñuñoa', 23),
(100, 'Maipú', 23),
(101, 'Macul', 23),
(102, 'Lo Prado', 23),
(103, 'Lo Espejo', 23),
(104, 'Lo Barnechea', 23),
(105, 'Las Condes', 23),
(106, 'La Reina', 23),
(107, 'La Pintana', 23),
(108, 'La Granja', 23),
(109, 'La Florida', 23),
(110, 'La Cisterna', 23),
(111, 'Independencia', 23),
(112, 'Huechuraba', 23),
(113, 'Estación Central', 23),
(114, 'El Bosque', 23),
(115, 'Conchalí', 23),
(116, 'Cerro Navia', 23),
(117, 'Cerrillos', 23),
(118, 'Puente Alto', 24),
(119, 'San José de Maipo', 24),
(120, 'Pirque', 24),
(121, 'San Bernardo', 25),
(122, 'Buin', 25),
(123, 'Paine', 25),
(124, 'Calera de Tango', 25),
(125, 'Melipilla', 26),
(126, 'Alhué', 26),
(127, 'Curacaví', 26),
(128, 'María Pinto', 26),
(129, 'San Pedro', 26),
(130, 'Isla de Maipo', 27),
(131, 'El Monte', 27),
(132, 'Padre Hurtado', 27),
(133, 'Peñaflor', 27),
(134, 'Talagante', 27),
(135, 'Codegua', 28),
(136, 'Coínco', 28),
(137, 'Coltauco', 28),
(138, 'Doñihue', 28),
(139, 'Graneros', 28),
(140, 'Las Cabras', 28),
(141, 'Machalí', 28),
(142, 'Malloa', 28),
(143, 'Mostazal', 28),
(144, 'Olivar', 28),
(145, 'Peumo', 28),
(146, 'Pichidegua', 28),
(147, 'Quinta de Tilcoco', 28),
(148, 'Rancagua', 28),
(149, 'Rengo', 28),
(150, 'Requínoa', 28),
(151, 'San Vicente de Tagua Tagua', 28),
(152, 'Chépica', 29),
(153, 'Chimbarongo', 29),
(154, 'Lolol', 29),
(155, 'Nancagua', 29),
(156, 'Palmilla', 29),
(157, 'Peralillo', 29),
(158, 'Placilla', 29),
(159, 'Pumanque', 29),
(160, 'San Fernando', 29),
(161, 'Santa Cruz', 29),
(162, 'La Estrella', 30),
(163, 'Litueche', 30),
(164, 'Marchigüe', 30),
(165, 'Navidad', 30),
(166, 'Paredones', 30),
(167, 'Pichilemu', 30),
(168, 'Curicó', 31),
(169, 'Hualañé', 31),
(170, 'Licantén', 31),
(171, 'Molina', 31),
(172, 'Rauco', 31),
(173, 'Romeral', 31),
(174, 'Sagrada Familia', 31),
(175, 'Teno', 31),
(176, 'Vichuquén', 31),
(177, 'Talca', 32),
(178, 'San Clemente', 32),
(179, 'Pelarco', 32),
(180, 'Pencahue', 32),
(181, 'Maule', 32),
(182, 'San Rafael', 32),
(183, 'Curepto', 33),
(184, 'Constitución', 32),
(185, 'Empedrado', 32),
(186, 'Río Claro', 32),
(187, 'Linares', 33),
(188, 'San Javier', 33),
(189, 'Parral', 33),
(190, 'Villa Alegre', 33),
(191, 'Longaví', 33),
(192, 'Colbún', 33),
(193, 'Retiro', 33),
(194, 'Yerbas Buenas', 33),
(195, 'Cauquenes', 34),
(196, 'Chanco', 34),
(197, 'Pelluhue', 34),
(198, 'Bulnes', 35),
(199, 'Chillán', 35),
(200, 'Chillán Viejo', 35),
(201, 'El Carmen', 35),
(202, 'Pemuco', 35),
(203, 'Pinto', 35),
(204, 'Quillón', 35),
(205, 'San Ignacio', 35),
(206, 'Yungay', 35),
(207, 'Cobquecura', 36),
(208, 'Coelemu', 36),
(209, 'Ninhue', 36),
(210, 'Portezuelo', 36),
(211, 'Quirihue', 36),
(212, 'Ránquil', 36),
(213, 'Treguaco', 36),
(214, 'San Carlos', 37),
(215, 'Coihueco', 37),
(216, 'San Nicolás', 37),
(217, 'Ñiquén', 37),
(218, 'San Fabián', 37),
(219, 'Alto Biobío', 38),
(220, 'Antuco', 38),
(221, 'Cabrero', 38),
(222, 'Laja', 38),
(223, 'Los Ángeles', 38),
(224, 'Mulchén', 38),
(225, 'Nacimiento', 38),
(226, 'Negrete', 38),
(227, 'Quilaco', 38),
(228, 'Quilleco', 38),
(229, 'San Rosendo', 38),
(230, 'Santa Bárbara', 38),
(231, 'Tucapel', 38),
(232, 'Yumbel', 38),
(233, 'Concepción', 39),
(234, 'Coronel', 39),
(235, 'Chiguayante', 39),
(236, 'Florida', 39),
(237, 'Hualpén', 39),
(238, 'Hualqui', 39),
(239, 'Lota', 39),
(240, 'Penco', 39),
(241, 'San Pedro de La Paz', 39),
(242, 'Santa Juana', 39),
(243, 'Talcahuano', 39),
(244, 'Tomé', 39),
(245, 'Arauco', 40),
(246, 'Cañete', 40),
(247, 'Contulmo', 40),
(248, 'Curanilahue', 40),
(249, 'Lebu', 40),
(250, 'Los Álamos', 40),
(251, 'Tirúa', 40),
(252, 'Angol', 41),
(253, 'Collipulli', 41),
(254, 'Curacautín', 41),
(255, 'Ercilla', 41),
(256, 'Lonquimay', 41),
(257, 'Los Sauces', 41),
(258, 'Lumaco', 41),
(259, 'Purén', 41),
(260, 'Renaico', 41),
(261, 'Traiguén', 41),
(262, 'Victoria', 41),
(263, 'Temuco', 42),
(264, 'Carahue', 42),
(265, 'Cholchol', 42),
(266, 'Cunco', 42),
(267, 'Curarrehue', 42),
(268, 'Freire', 42),
(269, 'Galvarino', 42),
(270, 'Gorbea', 42),
(271, 'Lautaro', 42),
(272, 'Loncoche', 42),
(273, 'Melipeuco', 42),
(274, 'Nueva Imperial', 42),
(275, 'Padre Las Casas', 42),
(276, 'Perquenco', 42),
(277, 'Pitrufquén', 42),
(278, 'Pucón', 42),
(279, 'Saavedra', 42),
(280, 'Teodoro Schmidt', 42),
(281, 'Toltén', 42),
(282, 'Vilcún', 42),
(283, 'Villarrica', 42),
(284, 'Valdivia', 43),
(285, 'Corral', 43),
(286, 'Lanco', 43),
(287, 'Los Lagos', 43),
(288, 'Máfil', 43),
(289, 'Mariquina', 43),
(290, 'Paillaco', 43),
(291, 'Panguipulli', 43),
(292, 'La Unión', 44),
(293, 'Futrono', 44),
(294, 'Lago Ranco', 44),
(295, 'Río Bueno', 44),
(296, 'Osorno', 45),
(297, 'Puerto Octay', 45),
(298, 'Purranque', 45),
(299, 'Puyehue', 45),
(300, 'Río Negro', 45),
(301, 'San Juan de la Costa', 45),
(302, 'San Pablo', 45),
(303, 'Calbuco', 46),
(304, 'Cochamó', 46),
(305, 'Fresia', 46),
(306, 'Frutillar', 46),
(307, 'Llanquihue', 46),
(308, 'Los Muermos', 46),
(309, 'Maullín', 46),
(310, 'Puerto Montt', 46),
(311, 'Puerto Varas', 46),
(312, 'Ancud', 47),
(313, 'Castro', 47),
(314, 'Chonchi', 47),
(315, 'Curaco de Vélez', 47),
(316, 'Dalcahue', 47),
(317, 'Puqueldón', 47),
(318, 'Queilén', 47),
(319, 'Quellón', 47),
(320, 'Quemchi', 47),
(321, 'Quinchao', 47),
(322, 'Chaitén', 48),
(323, 'Futaleufú', 48),
(324, 'Hualaihué', 48),
(325, 'Palena', 48),
(326, 'Lago Verde', 49),
(327, 'Coihaique', 49),
(328, 'Aysén', 50),
(329, 'Cisnes', 50),
(330, 'Guaitecas', 50),
(331, 'Río Ibáñez', 51),
(332, 'Chile Chico', 51),
(333, 'Cochrane', 52),
(334, 'O\'Higgins', 52),
(335, 'Tortel', 52),
(336, 'Natales', 53),
(337, 'Torres del Paine', 53),
(338, 'Laguna Blanca', 54),
(339, 'Punta Arenas', 54),
(340, 'Río Verde', 54),
(341, 'San Gregorio', 54),
(342, 'Porvenir', 55),
(343, 'Primavera', 55),
(344, 'Timaukel', 55),
(345, 'Cabo de Hornos', 56),
(346, 'Antártica', 56);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(128) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `descripcion_2` text DEFAULT NULL,
  `locacion` int(11) DEFAULT NULL,
  `estado` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `titulo`, `descripcion`, `descripcion_2`, `locacion`, `estado`) VALUES
(1, 'SABBAT III', 'CONNUCTIONE INCESTA Prods\r\nPresenta \"SABBAT III\"\r\nEste Sábado 27 de Agosto 2022\r\n16:00 Hrs\r\nEntrada General $6.000.-\r\nLugar: Espacio Good / Los Boldos # 78 B\r\nVILLA ALEMANA / QUINTA REGIÓN.\r\n\r\nOrden Presentaciones de las Bandas:\r\n•GOAT INVOKATION (Black/Death Metal Stgo)\r\n•MERCYTHRONE\r\n•AQUER\r\n•OSCULUM INFAME (Black/Death Metal Brasil)\r\n•BUNKER', NULL, 1, 'SUSPENDIDO'),
(2, 'OBITUARY EN VALPARAISO', 'OBITUARY REGRESA A VALPARAISO, CHILE, PARA EL PRÓXIMO 2 DE SEPTIEMBRE 2022 EN EL HUEVO', NULL, 1, 'FINALIZADO'),
(3, 'Outlander Fest', 'Fiesta de los emprendedores', NULL, 3, 'CREADO'),
(4, 'Outlander Fest', 'Fiesta de los emprendedores', NULL, 3, 'CREADO'),
(5, 'Outlander Fest', 'Fiesta de los emprendedores', NULL, 3, 'CREADO'),
(6, 'Outlander Fest', 'Fiesta de los emprendedores', 'Fiesta de los vgnfvgh cghc gfhdfghdthc fgbndftfcgbdt', 3, 'CREADO'),
(7, 'Curauma Fest', 'Rock y emprendimiento junto al lago\r\nCervecerías artesanales, música en vivo patio de comida y emprendedores.', '¡Rock y emprendimiento junto al lago es un evento que simplemente no puedes perderte! Desde la música en vivo hasta las cervecerías artesanales y los emprendedores locales, este evento es una celebración del espíritu creativo y emprendedor que se respira en la comunidad.\r\n\r\nEl ambiente es simplemente genial, con bandas locales tocando rock y otros géneros musicales que te mantienen emocionado y con ganas de bailar toda la noche. Las cervecerías artesanales ofrecen algunas de las mejores cervezas que he probado, todas elaboradas con los ingredientes más frescos y con pasión por la elaboración artesanal. Cada sorbo es una explosión de sabor que te hace apreciar el arte de la cerveza.\r\n\r\nPero no solo se trata de música y cerveza. Los emprendedores locales también tienen un papel importante en el evento, ofreciendo productos y servicios únicos e innovadores. Desde joyas artesanales hasta ropa y accesorios, hay algo para todos en este evento.\r\n\r\nY si te gusta la comida, entonces estás en el lugar correcto. El patio de comida ofrece una amplia variedad de opciones, desde platos clásicos hasta opciones vegetarianas y veganas. Todos los platillos son preparados con ingredientes frescos y ofrecen una explosión de sabores que seguramente te dejarán satisfecho.\r\n\r\nEn resumen, Rock y emprendimiento junto al lago es una experiencia increíble que combina música en vivo, cervezas artesanales, comida deliciosa y emprendedores locales en un ambiente vibrante y divertido. Si quieres sumergirte en la cultura creativa y emprendedora de la comunidad, este evento es definitivamente para ti. ¡No te lo pierdas!', 3, 'ACTIVO'),
(8, 'ANTIMATERIA', 'asdasd', 'Si eres un amante del metal y te encuentras en la ciudad de Paine, no te puedes perder el evento de bandas musicales que se llevará a cabo próximamente. El cartel está encabezado por \'Luxul\', una banda con un estilo Avant Garde que no te dejará indiferente, y acompañados de \'Bleed\' y \'Mass Suicide\', dos bandas que han creado una gran expectativa en la escena musical.Además, el evento contará con otras bandas invitadas y por confirmar, lo que asegura una noche llena de energía y talento. Pero no solo la música será la protagonista de la noche, ya que el evento también ofrecerá camping, comida, piscina y una feria de música, desde las 12 horas, para que puedas disfrutar de una experiencia completa. La organización ha sido impecable, con un equipo de staff muy amable y atento que te hará sentir como en casa. La producción y el sonido también están a la altura de lo que se espera en un evento de esta categoría, asegurando una calidad de sonido excelente para que puedas disfrutar al máximo de la música. La ciudad de Paine es el lugar perfecto para este evento, ya que su atmósfera relajada y natural crea un ambiente único que sin duda será una experiencia inolvidable para todos los asistentes. En resumen, si eres un fanático del metal y quieres disfrutar de una noche llena de buena música, diversión y relajación, el evento de bandas musicales en la ciudad de Paine es una oportunidad que no puedes dejar pasar. ¡Te esperamos!', 5, 'CREADO'),
(9, 'ANTIMATERIA', 'asdasd', 'Si eres un amante del metal y te encuentras en la ciudad de Paine, no te puedes perder el evento de bandas musicales que se llevará a cabo próximamente. El cartel está encabezado por \'Luxul\', una banda con un estilo Avant Garde que no te dejará indiferente, y acompañados de \'Bleed\' y \'Mass Suicide\', dos bandas que han creado una gran expectativa en la escena musical.Además, el evento contará con otras bandas invitadas y por confirmar, lo que asegura una noche llena de energía y talento. Pero no solo la música será la protagonista de la noche, ya que el evento también ofrecerá camping, comida, piscina y una feria de música, desde las 12 horas, para que puedas disfrutar de una experiencia completa. La organización ha sido impecable, con un equipo de staff muy amable y atento que te hará sentir como en casa. La producción y el sonido también están a la altura de lo que se espera en un evento de esta categoría, asegurando una calidad de sonido excelente para que puedas disfrutar al máximo de la música. La ciudad de Paine es el lugar perfecto para este evento, ya que su atmósfera relajada y natural crea un ambiente único que sin duda será una experiencia inolvidable para todos los asistentes. En resumen, si eres un fanático del metal y quieres disfrutar de una noche llena de buena música, diversión y relajación, el evento de bandas musicales en la ciudad de Paine es una oportunidad que no puedes dejar pasar. ¡Te esperamos!', 5, 'CREADO'),
(10, 'ANTIMATERIA', 'El festival Open Air Antimateria Fest es un evento de música que se lleva a cabo al aire libre y que reúne a algunas de las bandas más destacadas de la escena metalera y rockera actual. Este evento es una oportunidad única para los amantes de la música y de los festivales, ya que se celebra en un ambiente completamente diferente a los escenarios habituales.', 'Si eres un amante del metal y te encuentras en la ciudad de Paine, no te puedes perder el evento de bandas musicales que se llevará a cabo próximamente. El cartel está encabezado por \'Luxul\', una banda con un estilo Avant Garde que no te dejará indiferente, y acompañados de \'Bleed\' y \'Mass Suicide\', dos bandas que han creado una gran expectativa en la escena musical.Además, el evento contará con otras bandas invitadas y por confirmar, lo que asegura una noche llena de energía y talento. Pero no solo la música será la protagonista de la noche, ya que el evento también ofrecerá camping, comida, piscina y una feria de música, desde las 12 horas, para que puedas disfrutar de una experiencia completa. La organización ha sido impecable, con un equipo de staff muy amable y atento que te hará sentir como en casa. La producción y el sonido también están a la altura de lo que se espera en un evento de esta categoría, asegurando una calidad de sonido excelente para que puedas disfrutar al máximo de la música. La ciudad de Paine es el lugar perfecto para este evento, ya que su atmósfera relajada y natural crea un ambiente único que sin duda será una experiencia inolvidable para todos los asistentes. En resumen, si eres un fanático del metal y quieres disfrutar de una noche llena de buena música, diversión y relajación, el evento de bandas musicales en la ciudad de Paine es una oportunidad que no puedes dejar pasar. ¡Te esperamos!', 5, 'CREADO'),
(11, 'asdasdsd', 'asdasdsd', 'asdasdsd', 0, 'CREADO'),
(12, 'Fest Fest', 'Fiesta de los emprendedores', 'Fiesta de los emprendedores', 3, 'CREADO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fechas_evento`
--

CREATE TABLE `fechas_evento` (
  `id` int(11) NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_termino` date NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_termino` time NOT NULL,
  `evento_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `fechas_evento`
--

INSERT INTO `fechas_evento` (`id`, `fecha_inicio`, `fecha_termino`, `hora_inicio`, `hora_termino`, `evento_id`) VALUES
(1, '2022-10-02', '2022-10-02', '20:00:00', '00:00:00', 2),
(2, '2022-10-02', '2022-10-02', '20:00:00', '00:00:00', 2),
(3, '2022-10-02', '2022-10-02', '20:00:00', '00:00:00', 2),
(4, '2022-10-02', '2022-10-02', '20:00:00', '00:00:00', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `locaciones`
--

CREATE TABLE `locaciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(128) NOT NULL,
  `comuna` int(11) NOT NULL,
  `direccion` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `locaciones`
--

INSERT INTO `locaciones` (`id`, `nombre`, `comuna`, `direccion`) VALUES
(1, 'El Huevo', 65, 'Blanco 1386, Valparaíso'),
(2, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(3, 'Trotamundos', 79, 'Aníbal Pinto 879, Quilpué, Valparaiso, Valparaíso'),
(4, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(5, 'PAseo tranque La Luz', 65, 'Av. Borde Laguna no.10 Curauma, Placilla ,Valparaiso'),
(6, 'Casa Arebol', 65, 'Av.Los Placeres s/n ,Valparaiso'),
(7, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(8, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(9, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(10, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(11, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(12, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(13, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(14, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(15, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(16, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(17, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso'),
(18, 'asfdsdfdfasdf', 12, 'direccion'),
(19, 'Teatro Municipal de Valparaíso', 65, 'Uruguay 410, Valparaíso');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `evento_id` int(11) NOT NULL,
  `fecha_id` int(11) NOT NULL,
  `valor` int(11) NOT NULL,
  `recargo` int(11) NOT NULL,
  `tipo` varchar(64) NOT NULL,
  `tope` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `evento_id`, `fecha_id`, `valor`, `recargo`, `tipo`, `tope`) VALUES
(1, 3, 2, 8500, 2000, 'Cancha-General', 100),
(2, 3, 3, 6000, 2000, 'Preventa-Cancha', 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincias`
--

CREATE TABLE `provincias` (
  `id` int(11) NOT NULL,
  `provincia` varchar(64) NOT NULL,
  `region_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `provincias`
--

INSERT INTO `provincias` (`id`, `provincia`, `region_id`) VALUES
(1, 'Arica', 1),
(2, 'Parinacota', 1),
(3, 'Iquique', 2),
(4, 'El Tamarugal', 2),
(5, 'Tocopilla', 3),
(6, 'El Loa', 3),
(7, 'Antofagasta', 3),
(8, 'Chañaral', 4),
(9, 'Copiapó', 4),
(10, 'Huasco', 4),
(11, 'Elqui', 5),
(12, 'Limarí', 5),
(13, 'Choapa', 5),
(14, 'Petorca', 6),
(15, 'Los Andes', 6),
(16, 'San Felipe de Aconcagua', 6),
(17, 'Quillota', 6),
(18, 'Valparaiso', 6),
(19, 'San Antonio', 6),
(20, 'Isla de Pascua', 6),
(21, 'Marga Marga', 6),
(22, 'Chacabuco', 7),
(23, 'Santiago', 7),
(24, 'Cordillera', 7),
(25, 'Maipo', 7),
(26, 'Melipilla', 7),
(27, 'Talagante', 7),
(28, 'Cachapoal', 8),
(29, 'Colchagua', 8),
(30, 'Cardenal Caro', 8),
(31, 'Curicó', 9),
(32, 'Talca', 9),
(33, 'Linares', 9),
(34, 'Cauquenes', 9),
(35, 'Diguillín', 10),
(36, 'Itata', 10),
(37, 'Punilla', 10),
(38, 'Bio Bío', 11),
(39, 'Concepción', 11),
(40, 'Arauco', 11),
(41, 'Malleco', 12),
(42, 'Cautín', 12),
(43, 'Valdivia', 13),
(44, 'Ranco', 13),
(45, 'Osorno', 14),
(46, 'Llanquihue', 14),
(47, 'Chiloé', 14),
(48, 'Palena', 14),
(49, 'Coyhaique', 15),
(50, 'Aysén', 15),
(51, 'General Carrera', 15),
(52, 'Capitán Prat', 15),
(53, 'Última Esperanza', 16),
(54, 'Magallanes', 16),
(55, 'Tierra del Fuego', 16),
(56, 'Antártica Chilena', 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regiones`
--

CREATE TABLE `regiones` (
  `id` int(11) NOT NULL,
  `region` varchar(64) NOT NULL,
  `abreviatura` varchar(4) NOT NULL,
  `capital` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `regiones`
--

INSERT INTO `regiones` (`id`, `region`, `abreviatura`, `capital`) VALUES
(1, 'Arica y Parinacota', 'AP', 'Arica'),
(2, 'Tarapacá', 'TA', 'Iquique'),
(3, 'Antofagasta', 'AN', 'Antofagasta'),
(4, 'Atacama', 'AT', 'Copiapó'),
(5, 'Coquimbo', 'CO', 'La Serena'),
(6, 'Valparaiso', 'VA', 'valparaíso'),
(7, 'Metropolitana de Santiago', 'RM', 'Santiago'),
(8, 'Libertador General Bernardo O\'Higgins', 'OH', 'Rancagua'),
(9, 'Maule', 'MA', 'Talca'),
(10, 'Ñuble', 'NB', 'Chillán'),
(11, 'Biobío', 'BI', 'Concepción'),
(12, 'La Araucanía', 'IAR', 'Temuco'),
(13, 'Los Ríos', 'LR', 'Valdivia'),
(14, 'Los Lagos', 'LL', 'Puerto Montt'),
(15, 'Aysén del General Carlos Ibáñez del Campo', 'AI', 'Coyhaique'),
(16, 'Magallanes y de la Antártica Chilena', 'MG', 'Punta Arenas');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `boleto`
--
ALTER TABLE `boleto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comunas`
--
ALTER TABLE `comunas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `fechas_evento`
--
ALTER TABLE `fechas_evento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `locaciones`
--
ALTER TABLE `locaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `provincias`
--
ALTER TABLE `provincias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `regiones`
--
ALTER TABLE `regiones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `boleto`
--
ALTER TABLE `boleto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comunas`
--
ALTER TABLE `comunas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=347;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `fechas_evento`
--
ALTER TABLE `fechas_evento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `locaciones`
--
ALTER TABLE `locaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `provincias`
--
ALTER TABLE `provincias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT de la tabla `regiones`
--
ALTER TABLE `regiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
