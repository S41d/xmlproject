<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">

  <xsl:template match="/boutique">
    <html lang="fr">
      <head>
        <link href="style.css" type="text/css" rel="stylesheet"/>
        <title>La Boutique Sportive</title>
        <script src="script.js" type="application/javascript" defer=""/>
      </head>
      <body>
        <div class="container">
          <div>
            <label>
              Recherche article
              <input type="text" id="search"/>
            </label>
            filtrer par:
            <label>
              Nom article
              <input type="checkbox" id="filterNom"/>
            </label>
            <label>
              Marque
              <input type="checkbox" id="filterMarque"/>
            </label>
          </div>
          <br/>
          <div id="results"/>
          <div id="table">
            <h2 align="center">Liste des articles</h2>
            <table>
              <tr bgcolor="blue" align="center">
                <th>image</th>
                <th>nom</th>
                <th>marque</th>
                <th>prix (euro)</th>
                <th>promotion (euro)</th>
                <th>couleurs</th>
                <th>avis</th>
              </tr>
              <xsl:for-each select="rayon">
                <xsl:for-each select="categorie">
                  <xsl:for-each select="type">
                    <xsl:for-each select="article">
                      <tr align="center">
                        <td>
                          <img width="200" height="200">
                            <xsl:attribute name="src">
                              <xsl:value-of select="image/@src"/>
                            </xsl:attribute>
                          </img>
                        </td>
                        <td>
                          <xsl:value-of select="nom"/>
                        </td>
                        <td>
                          <xsl:value-of select="marque"/>
                        </td>
                        <td>
                          <xsl:value-of select="prix"/>
                        </td>
                        <td>
                          <xsl:value-of select="promotion"/>
                        </td>
                        <td>
                          <xsl:for-each select="couleurs">
                            <xsl:value-of select="couleur"/>
                          </xsl:for-each>
                        </td>
                        <td>
                          <xsl:for-each select="avis">
                            <xsl:value-of select="commentaire"/>
                          </xsl:for-each>
                        </td>
                      </tr>
                    </xsl:for-each>
                  </xsl:for-each>
                </xsl:for-each>
              </xsl:for-each>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
